let api_key = 'cb3ba7a4744a554ebf652b1cbf51ee4e'
let difKelvin = 273.15
let ciudad = 'Paris'
let url_base = 'https://api.openweathermap.org/data/2.5/weather'

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDAtosClima(ciudad)
    }
})

function fetchDAtosClima(ciudad){

    fetch(`${url_base}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then (data => mostrarDatosClima(data))

}

function mostrarDatosClima(data){
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''

    const ciudadNombre = data.name
    const temperatura = data.main.temp
    const descripcion = data.weather[0].description

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = ciudadNombre

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.round(temperatura-difKelvin)} grados centigrados`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripcion meteorologica es: ${descripcion}` 

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(descripcionInfo)
}



