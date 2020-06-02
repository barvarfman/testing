'use strict'

$(document).ready(init);

function init() {
    createPortfolios(1, 'mainSwepper', 'first game', 1);
    renderPortfolio();
}

function renderModalById(projId) {
    var strHtmls = `<div class="portfolio-modal modal fade" id="portfolioModal${projId}" tabindex="-1" role="dialog" aria-hidden="true">
   <div class="modal-dialog">
     <div class="modal-content">
       <div class="close-modal" data-dismiss="modal">
         <div class="lr">
           <div class="rl"></div>
         </div>
       </div>
       <div class="container">
         <div class="row">
           <div class="col-lg-8 mx-auto">
             <div class="modal-body">
               <!-- Project Details Go Here -->
               <h2>${'xxx'}</h2>
               <p class="item-intro text-muted">${'xxx'}</p>
               <img class="img-fluid d-block mx-auto" src="img/portfolio/${projId}.jpg" alt="${projId}">
               <p>${'xxx'}</p>
                
               <ul class="list-inline">
                 <li>${'xxx'}</li>
                 <li>${'xxx'}</li>
                 <li>${'xxx'}</li>
               </ul>
               <button class="btn btn-primary" data-dismiss="modal" type="button">
                   <i class="fa fa-times"></i>
                   Close Project</button>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>)`

    $('.modals').html(strHtmls);
}

function renderPortfolio() {
    var Portfolios = getPortfolios();
    var strHtmls = Portfolios.map(function (Portfolio) {
        return `  <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${Portfolio.id}" onclick="renderModalById(${Portfolio.id})">
            <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                </div>
            </div>
            <img class="img-fluid" src="img/portfolio/${Portfolio.url}.jpg" alt="${Portfolio.url}">
          </a>
            <div class="portfolio-caption">
                <h4>${Portfolio.name}</h4>
                <p class="text-muted">${Portfolio.title}</p>
            </div>
        </div>`
    });

    $('.portfolio-container').html(strHtmls).join('');

}