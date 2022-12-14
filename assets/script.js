var getMenuPosition = function() {
    return $('.scroll').scrollLeft();
};
  

$('#right').on('click', function() {
    $('.scroll').animate({
       scrollLeft: getMenuPosition() + 100
       }, 500);
});
  
$('#left').on('click', function() {
 $('.scroll').animate({
    scrollLeft: getMenuPosition() - 100
    }, 500);
});

setInterval(() => {
  $('.scroll').animate({
     scrollLeft: getMenuPosition() + 100
     }, 300);
}, 1000);

/* Call this function with a string containing the ID name to
 * the element containing the number you want to do a count animation on.*/
function incEltNbr(id, speed, count) {
  elt = document.getElementById(id);
  endNbr = Number(document.getElementById(id).innerHTML);
  incNbrRec(0, endNbr, elt, speed, count);
}

/*A recursive function to increase the number.*/
function incNbrRec(i, endNbr, elt, speed, count) {
  if (i <= endNbr) {
    elt.innerHTML = i;
    setTimeout(function() {//Delay a bit before calling the function again.
      incNbrRec(i + count, endNbr, elt, speed, count);
    }, speed);
  }
}

window.onload = async function() {
  await getData();

  incEltNbr("clients", 30, 1);
  incEltNbr("views", 0, 1000000);
  incEltNbr("channels", 30, 1);
}

async function getData() {
  const response = await fetch("/assets/data.json");
  const data = await response.json();

  document.getElementById("clients").innerText = data.counters.clients;
  document.getElementById("views").innerText = data.counters.views;
  document.getElementById("channels").innerText = data.counters.channels;

  const clients = $("#client-list");
  for (const client of data.clients) {
    clients.append(`
      <div class="card">
          <div class="client-container">
            <img src="${client.image}" alt="client" width="180" class="client">
          </div>
          <h2 style="margin-top: 5px;">${client.name}</h2>
      </div>`
    )
  }

  const youtubers = $("#youtuber-list");
  for (const client of data.youtubers) {
    youtubers.append(`
      <div class="card">
          <img src="${client.image}" alt="client" width="180" class="client">
          <h2 style="margin-top: 5px;">${client.name}</h2>
      </div>`
    )
  }

  const testimonials = $("#testimonial-list");
  for (const testimonial of data.testimonials) {
    testimonials.append(`
      <div class="testimonial">
          <div class="testimonial-name">
              <img src="${testimonial.image}" alt="User" width="80" height="80" class="client">
              <h1 style="margin-top: 30px; margin-left: 10px;">${testimonial.name}</h1>
          </div>

          <div class="comment">
              ${testimonial.comment}
          </div>
      </div>`
    )
  }
}