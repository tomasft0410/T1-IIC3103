<template>
<div v-if="trays.length > 0" class="container">
<h1 class="title"> Bienvenido al RestoRave! </h1>
<h2> Menus para agitar la cabeza</h2>
  <ul class="menus">
    <li v-for="tray in trays" :key="tray.id" class="menu" @click="showTray(tray.id)">
      {{ tray.name }}
      <br> <br>
      <h2>$ {{ tray.price }}</h2>
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
      page: 1,
      size: 15,
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
          page: this.page,
          size: this.size
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
            page: this.page,
            size: this.size
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
        page: 1,
        size: this.size
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
.container {
  gap: 1rem;
  padding: 1rem;
  margin: auto;
}
.menus {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1rem;
  background-color: #2c3e50;
}
.menu {
  list-style: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  min-height: 150px;
  margin-bottom: 10px;
  background-color: #fff;
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
