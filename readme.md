Scrolly 
==============

**Live example:** http://lab.victorcoulon.fr/javascript/scrolly/ (inspired by Nike Better World)

**HTML**

    <div id="item" class="parallax" data-velocity=".8"></div>

You can add ``data-fit="xx"`` to adjust your parallax in real conditions.

If it's a simple element, like an image.
    
    $('.parallax').scrolly();

If not:

    $('.parallax').scrolly({bgParallax: true});
    
    
    
    
######License
MIT Licence