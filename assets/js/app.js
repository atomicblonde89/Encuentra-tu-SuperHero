$(document).ready(function() {
    $("form").submit(function (event) {
    event.preventDefault();
    let valueInput = $("#sheroInput").val();
    
  
    $.ajax({
        url: "https://www.superheroapi.com/api.php/10227115706215892/" + valueInput,
        success: function(data){
    
    
            let image = data.image.url;
            let name = data.name;
            let affiliation = data.connections["group-affiliation"];
            let publisher = data.biography.publisher;
            let occupation = data.work.occupation;
            let appearance = data.biography["first-appearance"];
            let height = data.appearance.height;
            let weight = data.appearance.weight;
            let alias = data.biography.aliases;
             
            $('#sheroInfo').html(`
            
            <h4 class="text-center">Super Hero Encontrado</h4>
            <div class="bs-example">
            <div class="card" ">
                <div class="row no-gutters">
                    <div class="col12 col-sm-5">
                        <img src="${image}"  class="card-img-top">
                    </div>
                    <div class="col-sm-7">
                      <div class="card-body">
                       <h5 class="card-title">Nombre: ${name}</h5>
                        <div class="card-text">
                          <p><b>Conexiones:</b> ${affiliation}</p>
                          <p><b>Publicado por:</b> ${publisher}</p>
                          <hr>
                          <p><b>Ocupación:</b> ${occupation}</p>
                          <hr>
                          <p><b>Primera Aparición:</b> ${appearance}</p>
                          <hr>
                          <p><b>Altura:</b> ${height}</p>
                          <hr>
                          <p><b>Peso:</b> ${weight}</p>
                          <hr>
                          <p><b>Alianzas:</b> ${alias}</p>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>`);

    //Canvas.Js

                  var chart = new CanvasJS.Chart("sheroStats", {
                    animationEnabled: true,
                    title: {
                      text: `Estadísticas de Poder para ${name}`
                    },
                    data: [{
                      type: "pie",
                      showInLegend: "true",
                      legendText: "{label}",
                      startAngle: 240,
                      yValueFormatString: "##0\"\"",
                      indexLabel: "{label} ({y})",
                      dataPoints: [
                       { y: `${data.powerstats.intelligence}`, label: "intelligence" },
                       { y: `${data.powerstats.strength}`, label: "strength" },
                       { y: `${data.powerstats.speed}`, label: "speed" },
                       { y: `${data.powerstats.durability}`, label: "durability" },
                       { y: `${data.powerstats.power}`, label: "power" },
                      { y: `${data.powerstats.combat}`, label: "combat" }
                      ]
                    }]
                  });
                  chart.render();
        },

    });
    
    });

});