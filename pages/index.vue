<template>
<div v-if="trays.length >= 0" class="container">
  <h1 class="title"> RestoRave </h1>
  <div>
    <p style=" font-size: 20px; font-weight: 900; font-family: 'Catamaran', sans-serif; font-style: italic;">Ordenar Por:</p>
    <div class="botones" >
      <button name="order" id = "name,asc" @click="orderBy" class="boton_2">Nombre (A-Z)</button>
      <button name="order" id = "name,desc" @click="orderBy" class="boton_2">Nombre (Z-A)</button>
      <button name="order" id = "price,asc" @click="orderBy" class="boton_2">Precio (Menor a Mayor)</button>
      <button name="order" id = "price,desc" @click="orderBy" class="boton_2">Precio (Mayor a Menor)</button>
    </div>
  </div>

  <input type="text" v-model="search" placeholder="Buscar un menu por nombre" class="buscador">
  <ul class="menus">
    <li v-for="tray in filterlist" :key="tray.id" class="menu" @click="showTray(tray.id)">
      <p class="name">{{ tray.name }}</p>
      <br> <br>
      <h2 class="price">$ {{ tray.price }}</h2>
    </li>
  </ul>
  <div class = "botones">
    <button v-if="this.page > 1" @click="prevPage" class="boton">Anterior</button>
    <button v-if="this.page < this.total_pages" @click="nextPage" class="boton">Siguiente</button>
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
      search: '',
      sort: 'name',
      order: 'asc',
      total_pages: 0
    }
  },
  methods: {
    showTray (id) {
      this.$router.push(`/trays/${id}`)
    },
    nextPage () {
      this.page = this.page + 1
      console.log(this.page)
      const url = 'https://tarea-1.2023-1.tallerdeintegracion.cl'
      axios.get(url + '/trays', {
        params: {
          page: this.page,
          size: this.size,
          sort: this.sort,
          order: this.order
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
            size: this.size,
            sort: this.sort,
            order: this.order
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
    },
    orderBy (event) {
      this.order = event.target.id.split(',')[1]
      this.sort = event.target.id.split(',')[0]
      const url = 'https://tarea-1.2023-1.tallerdeintegracion.cl'
      axios.get(url + '/trays', {
        params: {
          page: 1,
          size: this.size,
          sort: event.target.id.split(',')[0],
          order: event.target.id.split(',')[1]
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
    searchTrayByName () {
      const url = 'https://tarea-1.2023-1.tallerdeintegracion.cl'
      axios.get(url + '/search/trays', {
        params: {
          name: this.search,
        }
      }
      ).then((response) => {
        console.log(response.data)
        this.trays = response.data
      })
        .catch((error) => {
          console.log(error)
        }
        )
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
  },
  computed: {
    filterlist () {
      return this.trays.filter((tray) => {
        return tray.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>

<style>

.container {
  gap: 1rem;
  padding: 1rem;
  margin: auto;
  border: 1px solid black;
  width: 80%;
  background-color: #f0eaea;
  margin-top: 3rem;
  border-radius: 10px;
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
  min-height: 80px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 10px;
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
  text-align-last: center;
  position: relative;
  text-transform: uppercase;
  font-size: 3rem;
  color: #2c3e50;
  font-weight: 900;
  font-family: 'Catamaran', sans-serif;
  font-style: italic;
}
.buscador {
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
}
.texto {
  display: flex;
  justify-content: center;
  font-size: 1rem;
  color: #13a01a;
  font-weight: 900;
  font-family: 'Catamaran', sans-serif;
  font-style: italic;
}
.boton {
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  background-color: #2c3e50;
  color: white;
  font-weight: 900;
  font-family: 'Catamaran', sans-serif;
  font-style: italic;
  padding: auto;
}
.boton:hover {
  background-color: white;
  color: #2c3e50;
  cursor: pointer;
}
.boton_2 {
  justify-content: center;
  gap: 1rem;
  width: 200px;
  height: 30px;
  border-radius: 10px;
  background-color: #2c3e50;
  color: white;
  font-weight: 900;
  font-family: 'Catamaran', sans-serif;
  font-style: italic;
  padding: auto;
}
.boton_2:hover {
  background-color: white;
  color: #2c3e50;
  cursor: pointer;
}

.name {
  font-size: 1.5rem;
  color: #2c3e50;
  font-weight: 900;
  font-family: 'Catamaran', sans-serif;
  font-style: italic;
  margin: 0;
}
.price {
  font-size: 1.5rem;
  color: #2c3e50;
  font-weight: 900;
  font-family: 'Catamaran', sans-serif;
  font-style: italic;
  margin: 0;
}
html {
  background-image: url(https://www.sleek-mag.com/wp-content/uploads/2017/08/Brave-Factory-Music-Festival-5.jpg)
}
</style>