//#region 
// ALDRI ENDRE NOE INNEN FOR Regionen
import * as Blocks from "./barneprat/blocks.mjs";
import * as Actions from "./barneprat/actions.mjs";
import * as Utils from "./barneprat/utils.mjs";
import { removeAll } from "./barneprat/globalTimer.mjs";

const GaaTil = (maal) => {
    document.body.innerHTML = "";
    removeAll();
    maal();
}

const Start = (maal) => {
    if (window.location.hash) {
        maal = window.location.hash.replace("#", "")
        eval(maal)();
    } else {
        GaaTil(maal);
    }
}
//#endregion

Start(oppgave10);

// Disse scenene er her som eksempler. Du kan ta dem bort eller endre dem. 

function Velkommen() {
    const velkommen = new Blocks.Text("Trykk på denne teksten", { style: "overskrift", x: 0, y: 0, width: 100, height: 100 });
    Actions.Click(velkommen, () => {
        GaaTil(scene2);
    })
}

function scene2() {
    new Blocks.Text("Dette er en ny scene, som du ser pga at du trykket ", { style: "overskrift2", x: 0, y: 0, width: 500, height: 500 });
}


function oppgave1() {
    const background = new Blocks.Image("../Bilder/Bakgrunnpaaske.jpg", { x: 0, y: 0, width: 1080, height: 810 });

    const tekst = new Blocks.Text("Akebakken", { style: "overskrift2", x: 20, y: 50, width: 200, height: 100 })
    //oppgave2();
    //oppgave3();
    //oppgave4();
    //oppgave5();
    //oppgave6();
    //oppgave7();
    //oppgave8();
    //oppgave9();
    //oppgave10();

    const Tristkylling = new Blocks.Image("../Bilder/Leisegkylling.png", { x: 300, y: 200, width: 500, height: 450 });
    const Gladkylling_v2= new Blocks.Image ("../Bilder/Gladkylling_v2.png", { x: 230, y: 200, width: 500, height: 450 });
    const ferdigKnapp= new Blocks.Image("../Bilder/Ferdigknapp.png", { x: 0, y: 410, width: 100, height: 100 });
    const oppg1lyd = new Blocks.Sound("../Lydfil/Oppgave1-Akebakken.m4a", { loop: false, auto: true });
    const ferdigoppg1 = new Blocks.Sound("../Lydfil/Oppgave1-ferdigKnapp.m4a", { loop: false, auto: false });
    
    const spillIgjennKnapp = new Blocks.Image("../Bilder/oppgavereply.png", { x: 0, y: 300, width: 100, height: 100 });
    spillIgjennKnapp.hide();new Blocks.Image("../Bilder/oppgavereply.png", { x: 0, y: 300, width: 100, height: 100 });

    Gladkylling_v2.hide();

    Actions.Click(Tristkylling, () =>{
        oppg1lyd.start();
        spillIgjennKnapp.show(); 
    }
        
    );

    Actions.Click(ferdigKnapp, () => {
        Tristkylling.hide();
        Gladkylling_v2.show();
        oppg1lyd.stop();
        ferdigoppg1.start();
    })
    

    Actions.Click(spillIgjennKnapp, () =>{
        oppg1lyd.start()
        //spillIgjennKnapp.hide(); 
    }  );

    Actions.Click(Gladkylling_v2, () =>{
        ferdigKnapp.show ()
        ferdigoppg1.start();
        
    
    });
       
}

function oppgave2() {
    const background = new Blocks.Image("../Bilder/Bakgrunnpaaske.jpg", { x: 0, y: 0, width: 1080, height: 810 });
    const tekst = new Blocks.Text("Matte", { style: "overskrift2", x: 125, y: 50, width: 300, height: 100 });
    const oppg2lyd = new Blocks.Sound("../Lydfil/Oppgave2-RegningAvEgg.m4a", { loop: false, auto: true });
    const ferdigoppg2 = new Blocks.Sound ("../Lydfil/Oppgave2-ferdigKnapp.m4a", { loop: false, auto: false });
    const Leisegkylling = new Blocks.Image("../Bilder/Leisegkylling.png", { x: 300, y: 200, width: 500, height: 450 });
    const spillIgjennKnapp = new Blocks.Image("../Bilder/oppgavereply.PNG", { x: 0, y: 300, width: 100, height: 100 });
    const Gladkylling_v2= new Blocks.Image ("../Bilder/Gladkylling_v2.PNG", { x: 230, y: 200, width: 500, height: 450 });
    const ferdigKnapp= new Blocks.Image("../Bilder/Ferdigknapp.png", { x: 0, y: 410, width: 100, height: 100 });
    Gladkylling_v2.hide();
   
    Actions.Click(Leisegkylling, () =>{
        oppg2lyd.start();
        spillIgjennKnapp.show(); 
    } ); 

    Actions.Click(ferdigKnapp, () => {
        Leisegkylling.hide();
        oppg2lyd.stop();
        Gladkylling_v2.show();
        ferdigoppg2.start();
    })
    
    Actions.Click(spillIgjennKnapp, () =>{
        oppg2lyd.start()
        //spillIgjennKnapp.hide(); 
    }  ); 

    Actions.Click(Gladkylling_v2, () =>{
        ferdigKnapp.show ()
        ferdigoppg2.start();
        
    
    });
       




} 

function oppgave3() {
const background = new Blocks.Image("../Bilder/Bakgrunnpaaske.jpg", { x: 0, y: 0, width: 1080, height: 810 });

new Blocks.Text("Harehopp", { style: "overskrift2", x: 100, y: 50, width: 300, height: 100 })
const oppg3lyd = new Blocks.Sound("../Lydfil/Oppgave3-Harehopp.m4a", { loop: false, auto: true });
const ferdigoppg3 = new Blocks.Sound("../Lydfil/Oppgave3-ferdigKnapp.m4a", { loop: false, auto: false });
const Leisegkylling = new Blocks.Image("../Bilder/Leisegkylling.png", { x: 300, y: 200, width: 500, height: 450 });
const spillIgjennKnapp = new Blocks.Image("../Bilder/oppgavereply.PNG", { x: 0, y: 300, width: 100, height: 100 }); 
const Gladkylling_v2= new Blocks.Image ("../Bilder/Gladkylling_v2.PNG", { x: 230, y: 200, width: 500, height: 450 });
const ferdigKnapp= new Blocks.Image("../Bilder/Ferdigknapp.png", { x: 0, y: 410, width: 100, height: 100 });

Gladkylling_v2.hide();
   
   Actions.Click(Leisegkylling,() => {
        oppg3lyd.start()
        spillIgjennKnapp.show();
    } ); 
       
    Actions.Click(ferdigKnapp, () => {
        Leisegkylling.hide();
        Gladkylling_v2.show();
        oppg3lyd.stop();
        ferdigoppg3.start();
    }) 

    Actions.Click(spillIgjennKnapp, () =>{
        oppg3lyd.start()
        //spillIgjennKnapp.hide(); 
    }  ); 

    Actions.Click(Gladkylling_v2, () =>{
        ferdigKnapp.show ()
        ferdigoppg3.start();
        
    
    });
        



    
    
    
    


}

function oppgave4() {
    const background = new Blocks.Image("../Bilder/Bakgrunnpaaske.jpg", { x: 0, y: 0, width: 1080, height: 810 });

    new Blocks.Text("Puslespill", { style: "overskrift2", x: 100, y: 50, width: 200, height: 100 })
    const ferdigoppg4 = new Blocks.Sound("../Lydfil/Oppgave4-ferdigKnapp.m4a", { loop: false, auto: true });
    const Gladkylling_v2 = new Blocks.Image("../Bilder/Gladkylling_v2.png", { x: 230, y: 200, width: 500, height: 450 });
    const spillIgjennKnapp = new Blocks.Image("../Bilder/oppgavereply.PNG", { x: 0, y: 300, width: 100, height: 100 }); 

    Actions.Click(Gladkylling_v2,() => {
        spillIgjennKnapp.show ();
        ferdigoppg4.start ();
    } );

    Actions.Click(spillIgjennKnapp, () =>{
        ferdigoppg4.start()
        //spillIgjennKnapp.hide(); 
    }  ); 

}
    
    



function oppgave5() {
    const background = new Blocks.Image("../Bilder/Bakgrunnpaaske.jpg", { x: 0, y: 0, width: 1080, height: 810 });

    new Blocks.Text("Eggjakt", { style: "overskrift2", x: 125, y: 50, width: 200, height: 100 })
    const oppg5lyd = new Blocks.Sound("../Lydfil/Oppgave5-Eggjakt.m4a", { loop: false, auto: true });
    const ferdigoppg5 = new Blocks.Sound ("../Lydfil/Oppgave5-ferdigKnapp.m4a", { loop: false, auto: false });
    const Leisegkylling = new Blocks.Image("../Bilder/Leisegkylling.png", { x: 300, y: 200, width: 500, height: 450 });
    const spillIgjennKnapp = new Blocks.Image("../Bilder/oppgavereply.PNG", { x: 0, y: 300, width: 100, height: 100 });
   const Gladkylling_v2 = new Blocks.Image("../Bilder/Gladkylling_v2.PNG", { x: 230, y: 200, width: 500, height: 450 });
   const ferdigKnapp= new Blocks.Image("../Bilder/Ferdigknapp.png", { x: 0, y: 410, width: 100, height: 100 });

   Gladkylling_v2.hide();
   
   Actions.Click(Leisegkylling, () => {
        oppg5lyd.start() 
        spillIgjennKnapp.hide();
    } );

    Actions.Click(ferdigKnapp, () => {
        Leisegkylling.hide();
        Gladkylling_v2.show();
        oppg5lyd.stop ();
        ferdigoppg5.start();
    }) 

    Actions.Click(spillIgjennKnapp, () =>{
        oppg5lyd.start()
        //spillIgjennKnapp.hide(); 
    }  );  

    Actions.Click(Gladkylling_v2, () =>{
        ferdigKnapp.show ()
        ferdigoppg5.start();
        
    
    }); 




    


  

    

}


function oppgave6() {
    const background = new Blocks.Image("../Bilder/Bakgrunnpaaske.jpg", { x: 0, y: 0, width: 1080, height: 810 });

    new Blocks.Text("fiskedam", { style: "overskrift2", x: 125, y: 50, width: 300, height: 100 })
    const oppg6lyd = new Blocks.Sound("../Lydfil/Oppgave6-fiskedam.m4a", { loop: false, auto: true });
    const ferdigoppg6 = new Blocks.Sound ("../Lydfil/Oppgave6-ferdigknapp.m4a", { loop: false, auto: false });
    const Leisegkylling = new Blocks.Image("../Bilder/Leisegkylling.png", { x: 300, y: 200, width: 500, height: 450 });
    const spillIgjennKnapp= new Blocks.Image("../Bilder/oppgavereply.PNG", { x: 0, y: 300, width: 150, height: 100 });
    const Gladkylling_v2 = new Blocks.Image ("../Bilder/Gladkylling_v2.PNG", { x:230, y: 200, width: 500, height: 450 });
    const ferdigKnapp= new Blocks.Image("../Bilder/Ferdigknapp.png", { x: 0, y: 410, width: 100, height: 100 });

    Gladkylling_v2.hide();
    
    Actions.Click(Leisegkylling, () => {
        oppg6lyd.start()
        spillIgjennKnapp.show();
    });

    Actions.Click(ferdigKnapp, () => {
        Leisegkylling.hide();
        Gladkylling_v2.show();
        oppg6lyd.stop ();
        ferdigoppg6.start();
    }) 

    Actions.Click(spillIgjennKnapp, () =>{
        oppg6lyd.start()
        //spillIgjennKnapp.hide(); 
    }  );  

    Actions.Click(Gladkylling_v2, () =>{
        ferdigKnapp.show ()
        ferdigoppg6.start();
        
    
    }); 

    
    
    
    
    

}


function oppgave7() {
    const background = new Blocks.Image("../Bilder/Bakgrunnpaaske.jpg", { x: 0, y: 0, width: 1080, height: 810 });

    new Blocks.Text("Staving", { style: "overskrift2", x: 125, y: 50, width: 300, height: 100 })
    const oppg7lyd = new Blocks.Sound("../Lydfil/Oppgave7-StavingavHare.m4a", { loop: false, auto: true });
    const ferdigoppg7= new Blocks.Sound ("../Lydfil/Oppgave7-ferdigknapp.m4a", { loop: false, auto: false }); 
    const Leisegkylling = new Blocks.Image("../Bilder/Leisegkylling.png", { x: 300, y: 200, width: 500, height: 450 });
    const spillIgjennKnapp = new Blocks.Image("../Bilder/oppgavereply.PNG", { x: 0, y: 300, width: 150, height: 100 });
    const Gladkylling_v2 = new Blocks.Image ("../Bilder/Gladkylling_v2.PNG", { x: 230, y: 200, width: 500, height: 450 });
    const ferdigKnapp= new Blocks.Image("../Bilder/Ferdigknapp.png", { x: 0, y: 410, width: 100, height: 100 });

    Gladkylling_v2.hide();
    
    Actions.Click(Leisegkylling, () => {
        oppg7lyd.start()
        spillIgjennKnapp.show();
    }
        
    );

    Actions.Click(ferdigKnapp, () => {
        Leisegkylling.hide();
        Gladkylling_v2.show();
        oppg7lyd.stop ();
        ferdigoppg7.start();
    }) 

    Actions.Click(spillIgjennKnapp, () =>{
        oppg7lyd.start()
        //spillIgjennKnapp.hide(); 
    }  ); 
    
    Actions.Click(Gladkylling_v2, () =>{
        ferdigKnapp.show ()
        ferdigoppg7.start();
        
    
    });  








  

   

}


function oppgave8() {
    const background = new Blocks.Image("../Bilder/Bakgrunnpaaske.jpg", { x: 0, y: 0, width: 1080, height: 810 });
    new Blocks.Text("formjakt", { style: "overskrift2", x:125, y: 50, width: 300, height: 100 })
    const oppg8lyd = new Blocks.Sound("../Lydfil/Oppgave8-LagingAvFormer.m4a", { loop: false, auto: true });
    const ferdigoppg8 = new Blocks.Sound("../Lydfil/Oppgave8-ferdigKnapp.m4a", { loop: false, auto: false });
    const Leisegkylling = new Blocks.Image("../Bilder/Leisegkylling.png", { x: 300, y: 200, width: 500, height: 450 });
    const spillIgjennKnapp = new Blocks.Image("../Bilder/oppgavereply.PNG", { x: 0, y: 300, width: 100, height: 100 });
    const Gladkylling_v2= new Blocks.Image ("../Bilder/Gladkylling_v2.PNG",{ x: 230, y: 200, width: 500, height: 450 });
    const ferdigKnapp= new Blocks.Image("../Bilder/Ferdigknapp.png", { x: 0, y: 410, width: 100, height: 100 });

    Gladkylling_v2.hide();
    
    Actions.Click(Leisegkylling, () =>{
        oppg8lyd.start();
    spillIgjennKnapp.show();
    }
        
    );

    Actions.Click(ferdigKnapp, () => {
        Leisegkylling.hide();
        Gladkylling_v2.show();
        oppg8lyd.stop();
        ferdigoppg8.start();
    }) 

    Actions.Click(spillIgjennKnapp, () =>{
        oppg8lyd.start()
        //spillIgjennKnapp.hide(); 
    }  ); 
    
    Actions.Click(Gladkylling_v2, () =>{
        ferdigKnapp.show ()
        ferdigoppg8.start();
        
    
    });  

    
    
}


function oppgave9() {
    const background = new Blocks.Image("../Bilder/Bakgrunnpaaske.jpg", { x: 0, y: 0, width: 1080, height: 810 });

    new Blocks.Text("Kappløp", { style: "overskrift2", x: 125, y: 50, width: 300, height: 100 })
    const oppg9lyd = new Blocks.Sound("../Lydfil/Oppgave9-hinkOgHopp.m4a", { loop: false, auto: true });
    const ferdigoppg9 = new Blocks.Sound("../Lydfil/Oppgave9-ferdigKnapp.m4a", { loop: false, auto: false });
    const Leisegkylling = new Blocks.Image("../Bilder/Leisegkylling.png", { x: 300, y: 200, width: 500, height: 450 });
    const spillIgjennKnapp = new Blocks.Image("../Bilder/oppgavereply.PNG", { x: 0, y: 300, width: 100, height: 100 });
    const Gladkylling_v2 = new Blocks.Image ("../Bilder/Gladkylling_v2.PNG", { x: 230, y: 200, width: 500, height: 450 });
    const ferdigKnapp= new Blocks.Image("../Bilder/Ferdigknapp.png", { x: 0, y: 410, width: 100, height: 100 });

    Gladkylling_v2.hide();
    
    Actions.Click(Leisegkylling, () =>{
        oppg9lyd.start();
        spillIgjennKnapp.show();
    }
    );
    Actions.Click(ferdigKnapp, () => {
        Leisegkylling.hide();
        Gladkylling_v2.show();
        oppg9lyd.stop();
        ferdigoppg9.start();
    }) 

    Actions.Click(spillIgjennKnapp, () =>{
        oppg9lyd.start()
        //spillIgjennKnapp.hide(); 
    }  ); 
    
    Actions.Click(Gladkylling_v2, () =>{
        ferdigKnapp.show ()
        ferdigoppg9.start();
        
    
    });  
 
   
   
}


function oppgave10() {
    const background = new Blocks.Image("../Bilder/Bakgrunnpaaske.jpg", { x: 0, y: 0, width: 1080, height: 810 });

    const tekst = new Blocks.Text("Egg på skjei", { style: "overskrift2", x: 0, y: 20, width: 200, height: 60 })
    const oppg10lyd = new Blocks.Sound("../Lydfil/Oppgave10-eggpåskje.m4a", { loop: false, auto: true });
    const ferdigoppg10 = new Blocks.Sound("../Lydfil/Oppgave10-ferdigKnapp.m4a", { loop: false, auto: false });
    const Leisegkylling = new Blocks.Image("../Bilder/Leisegkylling.png", { x: 300, y: 200, width: 500, height: 450 });
    const Gladkylling_v2 = new Blocks.Image("../Bilder/Gladkylling_v2.PNg", { x: 230, y: 200, width: 500, height: 450 });
    const ferdigKnapp= new Blocks.Image("../Bilder/Ferdigknapp.png", { x: 0, y: 500, width: 100, height: 100 });
    const spillIgjennKnapp = new Blocks.Image("../Bilder/oppgavereply.PNG", { x: 0, y: 400, width: 100, height: 100 });

    Gladkylling_v2.hide();
   
    Actions.Click(Leisegkylling, () =>{
        oppg10lyd.start();
        spillIgjennKnapp.show();
    }
        
    );

    Actions.Click(ferdigKnapp, () => {
        Leisegkylling.hide();
        Gladkylling_v2.show();
        oppg10lyd.stop();
        ferdigoppg10.start();
    }) 

    Actions.Click(spillIgjennKnapp, () =>{
        oppg10lyd.start()
        //spillIgjennKnapp.hide(); 
    }  ); 
    
    Actions.Click(Gladkylling_v2, () =>{
        ferdigKnapp.show ()
        ferdigoppg10.start();
        
    
    });  

   
}




