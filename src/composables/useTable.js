import { ref, onMounted } from 'vue';
import axios from 'axios';

export function useTable() {

  const items = ref([]);
  const loading = ref(false);
  const search = ref('');
  const error = ref(null);
  const headers = ref([]);
  const apiOptions = [
    {
      label: 'Posts',
      url: 'https://jsonplaceholder.typicode.com/posts',
      mapHeaders: data => [
        { title: 'ID', key: 'id', sortable: true },
        { title: 'TÍTULO', key: 'title', sortable: true },
        { title: 'CUERPO', key: 'body', sortable: false },
        { title: 'USUARIO', key: 'userId', sortable: true }
      ]
    },
    {
      label: 'Comentarios',
      url: 'https://jsonplaceholder.typicode.com/comments',
      mapHeaders: data => [
        { title: 'ID', key: 'id', sortable: true },
        { title: 'NOMBRE', key: 'name', sortable: true },
        { title: 'EMAIL', key: 'email', sortable: true },
        { title: 'COMENTARIO', key: 'body', sortable: false },
        { title: 'POST', key: 'postId', sortable: true }
      ]
    },
    {
      label: 'Álbumes',
      url: 'https://jsonplaceholder.typicode.com/albums',
      mapHeaders: data => [
        { title: 'ID', key: 'id', sortable: true },
        { title: 'TÍTULO', key: 'title', sortable: true },
        { title: 'USUARIO', key: 'userId', sortable: true }
      ]
    },
    {
      label: 'Fotos',
      url: 'https://jsonplaceholder.typicode.com/photos',
      mapHeaders: data => [
        { title: 'ID', key: 'id', sortable: true },
        { title: 'TÍTULO', key: 'title', sortable: true },
        { title: 'URL', key: 'url', sortable: false },
        { title: 'THUMBNAIL', key: 'thumbnailUrl', sortable: false },
        { title: 'ÁLBUM', key: 'albumId', sortable: true }
      ]
    },
    {
      label: 'Tareas',
      url: 'https://jsonplaceholder.typicode.com/todos',
      mapHeaders: data => [
        { title: 'ID', key: 'id', sortable: true },
        { title: 'TÍTULO', key: 'title', sortable: true },
        { title: 'COMPLETADO', key: 'completed', sortable: true },
        { title: 'USUARIO', key: 'userId', sortable: true }
      ]
    },
    {
      label: 'Usuarios',
      url: 'https://jsonplaceholder.typicode.com/users',
      mapHeaders: data => [
        { title: 'ID', key: 'id', sortable: true },
        { title: 'NOMBRE', key: 'name', sortable: true },
        { title: 'USUARIO', key: 'username', sortable: true },
        { title: 'EMAIL', key: 'email', sortable: true },
        { title: 'CIUDAD', key: 'address.city', sortable: true },
        { title: 'TELÉFONO', key: 'phone', sortable: false },
        { title: 'WEB', key: 'website', sortable: false }
      ]
    }
  ];

  function generateHeadersFromData(data) {
    if (!Array.isArray(data) || data.length === 0) return [];
    return Object.keys(data[0]).map(key => ({ title: key.toUpperCase(), key, sortable: true }));
  }
  const selectedApi = ref(apiOptions[0]);
  let intervalId = null;

  async function fetchData() {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.get(selectedApi.value.url);
      items.value = response.data;

      if (typeof selectedApi.value.mapHeaders === 'function') {
        headers.value = selectedApi.value.mapHeaders(response.data);
      } else {
        headers.value = generateHeadersFromData(response.data);
      }
    } catch (err) {
      error.value = 'No se pudieron cargar los datos. Por favor, intente nuevamente.';
      items.value = [];
      headers.value = [];
    } finally {
      loading.value = false;
    }
  }

  function startAutoRefresh() {
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(fetchData, 10000);
  }

  function stopAutoRefresh() {
    if (intervalId) clearInterval(intervalId);
    intervalId = null;
  }

  function changeApi(apiLabel) {
    const found = apiOptions.find(opt => opt.label === apiLabel);
    if (found) {
      selectedApi.value = found;
      fetchData();
      startAutoRefresh();
    }
  }

  onMounted(() => {
    fetchData();
    startAutoRefresh();
  });

  return {
    headers,
    items,
    loading,
    search,
    error,
    apiOptions,
    selectedApi,
    fetchData,
    changeApi,
    startAutoRefresh,
    stopAutoRefresh
  };
}
