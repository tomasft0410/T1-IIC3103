<template>
<div v-if="trays.length > 0">
<h1 class="title"> Bienvenido al RestoRave! </h1>
<h2> Menus para agitar la cabeza</h2>
  <ul class="menus">
    <li v-for="tray in trays" :key="tray.id" class="menu" @click="showTray(tray.id)">
      {{ tray.name }}
      $ {{ tray.price }}
    </li>
  </ul>
  <!-- pasar a la siguiente pagina -->
  <div class = "botones">
    <button v-if="this.page > 1" @click="prevPage">Anterior</button>
    <button v-if="this.page < this.total_pages" @click="nextPage">Siguiente</button>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      trays: [],
      page: 1
    }
  },
  methods: {
    showTray (id) {
      window.location.href = '/trays/' + id
    },
    nextPage () {
      this.page = this.page + 1
      console.log(this.page)
      const url = 'https://tarea-1.2023-1.tallerdeintegracion.cl'
      axios.get(url + '/trays', {
        params: {
          page: this.page
        }
      }
      ).then((response) => {
        this.trays = response.data.items
        console.log(this.trays)
      })
        .catch((error) => {
          console.log(error)
        }
        )
    },
    prevPage () {
      if (this.page > 1) {
        this.page = this.page - 1
        console.log(this.page)
        const url = 'https://tarea-1.2023-1.tallerdeintegracion.cl'
        axios.get(url + '/trays', {
          params: {
            page: this.page
          }
        }
        ).then((response) => {
          this.trays = response.data.items
          console.log(this.trays)
        })
          .catch((error) => {
            console.log(error)
          }
          )
      }
    }
  },
  mounted () {
    const url = 'https://tarea-1.2023-1.tallerdeintegracion.cl'
    axios.get(url + '/trays', {
      params: {
        page: 1
      }
    }
    ).then((response) => {
      this.trays = response.data.items
      this.total_pages = response.data.pages
    })
      .catch((error) => {
        console.log(error)
      }
      )
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.menus {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
}
.menu {
  list-style: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
}
.menu:hover {
  background-color: #ccc;
  cursor: pointer;
}
.botones {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
.title {
  position: relative;
  text-transform: uppercase;
  font-size: 3rem;
  color: grey;
  font-weight: 900;
  font-family: 'Catamaran', sans-serif;
  font-style: italic;
}
</style>
