function getDefaultWorkshops() {
  return [
    {
      id: 1,
      nombre: 'Cata Guiada Premium',
      descripcion: 'Aprende a identificar notas de sabor, aroma y cuerpo. Experiencia sensorial completa con café de origen único.',
      imagen: 'https://www.cafeslabrasilena.es/wp-content/uploads/2019/11/LA-CATA-DE-CAF%C3%89.png',
      duracion: '2 horas',
      precio: 45000,
      fecha: 'Sábados 10:00 am',
      experiencia: [
        'Aprende a reconocer un café: bueno, malo y con defectos.',
        'Identifica los diferentes aromas y fragancias.',
        'Aprende a distinguir los sabores ácidos y tipos de dulzura.',
        'Descubre el proceso de preparación paso a paso con un experto.'
      ]
    },
    {
      id: 2,
      nombre: 'Origen y Sostenibilidad',
      descripcion: 'Viaja por las regiones cafeteras de Colombia. Conoce cómo cultivamos nuestro café con compromiso ambiental.',
      imagen: 'https://diariodelhuila.com/wp-content/uploads/2021/05/Recolector-de-cafe-foto-1.jpg',
      duracion: '3 horas',
      precio: 65000,
      fecha: 'Domingos 2:00 pm',
      experiencia: [
        'Descubre el ciclo del café desde la finca hasta tu taza.',
        'Conoce prácticas sostenibles de cultivo y recolección.',
        'Aprende por qué el origen define sabor y calidad.',
        'Comprende el impacto social y ambiental del café colombiano.'
      ]
    },
    {
      id: 3,
      nombre: 'Técnicas Barista',
      descripcion: 'Domina el arte del espresso, cappuccino y latte art. Certificación incluida al finalizar el taller.',
      imagen: 'https://coffeeacademy.juanbarista.com/wp-content/uploads/2021/04/Taller-metodos-de-filtrado-juan-barista-1.jpg',
      duracion: '4 horas',
      precio: 85000,
      fecha: 'Viernes 6:00 pm',
      experiencia: [
        'Practica la extracción perfecta del espresso.',
        'Aprende a crear cappuccinos, lattes y arte latte.',
        'Controla molienda, temperatura y flujo de agua.',
        'Recibe asesoría personalizada en técnicas barista profesionales.'
      ]
    }
  ];
}

function renderWorkshopDetail(workshop) {
  const detailImage = document.getElementById('detailImage');
  const detailTitle = document.getElementById('detailTitle');
  const detailOfferText = document.getElementById('detailOfferText');
  const detailDuration = document.getElementById('detailDuration');
  const detailDate = document.getElementById('detailDate');
  const detailPrice = document.getElementById('detailPrice');
  const ticketPrice = document.getElementById('ticketPrice');
  const detailTime = document.getElementById('detailTime');
  const ticketTitle = document.getElementById('ticketTitle');
  const detailExperience = document.getElementById('detailExperience');

  if (!workshop || !detailImage) return;

  detailImage.src = workshop.imagen;
  detailTitle.textContent = workshop.nombre;
  ticketTitle.textContent = workshop.nombre;
  detailOfferText.textContent = workshop.descripcion;
  detailDuration.textContent = workshop.duracion;
  detailDate.textContent = workshop.fecha;
  detailTime.textContent = workshop.fecha;
  detailPrice.textContent = `$${workshop.precio.toLocaleString('es-CO')}`;
  if (ticketPrice) {
    ticketPrice.textContent = `$${workshop.precio.toLocaleString('es-CO')}`;
  }

  const experiencePoints = workshop.experiencia || [
    'Aprende a reconocer un café: bueno, malo y con defectos.',
    'Identifica los diferentes aromas y fragancias.',
    'Aprende a distinguir los sabores ácidos y tipos de dulzura.',
    'Descubre el proceso de preparación paso a paso con un experto.'
  ];

  detailExperience.innerHTML = experiencePoints.map(point => `<li class="mb-2">${point}</li>`).join('');
}

function renderWorkshopOptions(workshops, selectedWorkshopId) {
  const workshopOptions = document.getElementById('workshopOptions');
  if (!workshopOptions) return;

  workshopOptions.innerHTML = workshops
    .filter(w => w.id !== selectedWorkshopId)
    .map(w => `
      <div class="col-md-6">
        <div class="card h-100 workshop-card shadow-sm ${selectedWorkshopId === w.id ? 'border border-warning' : ''}" onclick="selectWorkshop(${w.id})" style="cursor:pointer;">
          <img src="${w.imagen}" alt="${w.nombre}" class="card-img-top">
          <div class="card-body">
            <h6 class="card-title fw-bold">${w.nombre}</h6>
            <p class="card-text text-muted small mb-2">${w.descripcion}</p>
            <p class="mb-3"><i class="fas fa-calendar-alt me-1"></i>${w.fecha}</p>
            <div class="d-flex justify-content-between align-items-center">
              <span class="text-success fw-bold">$${w.precio.toLocaleString('es-CO')}</span>
              <button class="btn btn-sm btn-primary" type="button">Seleccionar</button>
            </div>
          </div>
        </div>
      </div>
    `)
    .join('');
}

function selectWorkshop(workshopId) {
  const workshops = getDefaultWorkshops();
  const workshop = workshops.find(w => w.id === workshopId) || workshops[0];
  renderWorkshopDetail(workshop);
  renderWorkshopOptions(workshops, workshop.id);
  localStorage.setItem('selectedWorkshopId', workshop.id);
}

function loadWorkshopDetail() {
  const workshops = getDefaultWorkshops();
  const selectedWorkshopId = Number(localStorage.getItem('selectedWorkshopId')) || workshops[0].id;
  const workshop = workshops.find(w => w.id === selectedWorkshopId) || workshops[0];

  renderWorkshopDetail(workshop);
  renderWorkshopOptions(workshops, workshop.id);
  localStorage.setItem('selectedWorkshopId', workshop.id);

  let quantity = 1;
  const ticketQuantityEl = document.getElementById('ticketQuantity');
  const decreaseQty = document.getElementById('decreaseQty');
  const increaseQty = document.getElementById('increaseQty');
  const addToCartBtn = document.getElementById('addToCartBtn');
  const buyNowBtn = document.getElementById('buyNowBtn');

  const updateQuantity = () => {
    ticketQuantityEl.textContent = quantity;
  };

  decreaseQty.addEventListener('click', () => {
    if (quantity > 1) quantity -= 1;
    updateQuantity();
  });

  increaseQty.addEventListener('click', () => {
    quantity += 1;
    updateQuantity();
  });

  addToCartBtn.addEventListener('click', () => {
    addToCart(workshop.nombre, workshop.precio);
  });

  buyNowBtn.addEventListener('click', () => {
    addToCart(workshop.nombre, workshop.precio);
    window.location.href = 'cart.html';
  });

  updateQuantity();
}

loadWorkshopDetail();
