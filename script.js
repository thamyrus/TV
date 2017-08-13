//variávels para capturar o vídeo e o ícone do canal no HTML
var video, image;
// três vetores respectivos aos vídeos de cada canal 
var sourceVideos = [], sourceVideos2 = [], sourceVideos3 = [];
// três vetores respectivos à programação de cada canal 
var schedule = [], schedule2 = [], schedule3 = [];
// três vetores respectivos à programação de cada canal 
var description = [], description2 = [], description3 = [];
// como são poucos ícones, decide por um vetor que possui os três  
var icons = [];
//vetor responsável por armazenar a duração dos vídeos e vetor responsável por armazenar os canais
var durationVideos = new Array(), channels = new Array();
//varíaveis que vão auxiliar no processo da TV, com exceção do metaVideo, ulSchedule, nameChannel e nameChannelSchedule
var nextDuration = 0, currentChannel = 0, nextSource = 0, channelNumber = 0; 
var dateStart, Loading, metaVideo, playingChannel; 
var ulSchedule, scheduleNumber = 0;
var nameChannel,nameChannelSchedule;
//variáveis para armazenar os botões do HTML
var btn_changeChannel, btn_changeSchedule; 

//esse comando faz com que a função só execute depois que o documento é carregado, o documento no caso é o DOM
// e essa é a função principal,chamada "main" ou maín=mãe ( ba dum tz), tudo de importante é colocado dentro dela
$(document).ready(main);

                //essa é a função (main)mamãe, diga olá :D
                function main(){
                    //você pode notar que vai ter várias funções aqui, mas só a chamada delas
                    //elas são como os filhos que vão pro exterior e tudo que fica dentro da mãe é a reunião de família
                    // os filhos do exterior ( funções ) vem só fazer seu papel na reunião e fim.
                    // mas agora vou continuar explicando :p


                    //Lembra dos vetores criados pros vídeos, programação, descrição e para os ícones? :D
                    //É a vez deles, como tudo quase tudo no código é gerado em função deles, eles são os primeiros
                    // a ser carregado na função mãe. Os vetores tem um comando chamado "push", como o próprio nome já diz
                    //o "push" é responsável por empurrar as informações. Isso serve pra não ter que ficar colocando as posições
                    //dos vetores no caso assim: nomeDoVetor[posiçao] = "informação a ser armazenada". 
                    //Agora vou explicar eu vou armazenar em cada vetor. 

                    //            DADOS DO PRIMEIRO CANAL   //

                    //vídeos do primeiro canal
                    sourceVideos.push("http://anituba.com/player.php?m=NzkwMDAxNjQzY2FiZDY2N2FpNTFz");
                    sourceVideos.push("http://anituba.com/player.php?m=M2JlNGVmZjQ3MWEzOWI4MWFpNTFz");
                    sourceVideos.push("http://anituba.com/player.php?m=OGZiNGE2ZmQxMmU5ZTRkY2FpNTFz");
                    sourceVideos.push("http://anituba.com/player.php?m=Y2U1NDQ1NjNjNzdjMjAyNWFpNTFz");

                    //título dos vídeos do primeiro canal ( depois vai ter mais coisa dentro do vetor, mas explico depois)
                    schedule.push("Episódio O1 - Sakura e o Misterioso Livro Mágico");
                    schedule.push("Episódio O2 - A amiga de Sakura");
                    schedule.push("Episódio O3 - O primeiro encontro de Sakura");
                    schedule.push("Episódio O4 - Um domingo muito agitado");

                    //descrição dos vídeos do primeiro canal
                    // ps: nessa parte eu tive o problema do texto ser muito grande e não quebrar linha automaticante
                    //eu descobri que existe um comando no css que lê os <br> de um texto e automaticamente quebra a linha
                    //então é possível notar que no meio dos textos das descrições têm uns <br> mas eles vão "sumir"
                    description.push("O começo da confusão toda!! Sakura escuta um estranho barulho vindo da biblioteca de sua casa.");
                    description.push("Acidentalmente, Tomoyo acaba descobrindo a missão de Sakura. Além disso, coisas estranhas <br>acontecem na escola:alguém fez uma enorme bagunça!");
                    description.push("Sakura vai passear com Yukito, e Tomoyo, que segue filmando tudo. Porém há uma Carta Clow por perto,<br> e coisas estranhas acontecem no aquário onde ela está com Yukito e onde ela tinha ido em uma excursão da escola!");
                    description.push("É Domigo mas Sakura tem que arrumar a casa. Tudo parece normal, até que ela encontra duas Cartas Clow <br>ainda em forma de carta! Mas esquece de escrever seu nome nelas...");

                     //ícone do primeiro canal              
                    icons.push("data/imagens/icon1.png");

                    //            DADOS DO SEGUNDO CANAL   //

                    //vídeos do segundo canal
                    sourceVideos2.push("http://www.blogger.com/video-play.mp4?contentId=20e98e68e98be000");
                    sourceVideos2.push("http://www.blogger.com/video-play.mp4?contentId=bb01b51b8f05c34d");    
                    sourceVideos2.push("http://www.blogger.com/video-play.mp4?contentId=89d0a9b8e22372c5");
                    sourceVideos2.push("http://www.blogger.com/video-play.mp4?contentId=0d879fef24dce7b5");

                    //título dos vídeos do segundo canal
                    schedule2.push("Episódio O1 - Como uma garota medrosa se transforma em guerreira");
                    schedule2.push("Episódio O2 - A casa da adivinha é um ninho de monstros");
                    schedule2.push("Episódio O3 - Salvem as garotas apaixonadas");
                    schedule2.push("Episódio O4 - Quer ficar magra? ");

                    //descrição dos vídeos do segundo canal
                    description2.push("Serena Tsukino é uma estudante que está sempre encontrando-se em problemas indesejados. Um dia ela<br> encontra um gato falante, que revela que as forças das trevas estão ameaçando os inocentes. Serena se transforma<br> em Sailor Moon, um guardião que luta pela justiça.");
                    description2.push("Uma casa nova da fortuna abre-se no distrito de Juban e ganha rapidamente a popularidade para suas<br> previsões exatas. Mas logo, os clientes que tiveram suas fortunas ler começam a agir com violência, incluindo Gurio Umino,<br> um menino que tem uma queda por Usagi.");
                    description2.push("Depois de pesar-se, Serena acha que está ganhando peso. Depois de conversar com Molly e seus amigos,<br> ela decide tentar um novo programa de fitness que todos estão falando.<br> No entanto, o programa é uma das armadilhas de Jedite para roubar energia.");
                    description2.push("Jedite fez um de seus monstros assumir o controle de uma celebridade popular para ajudar a reunir energia.<br> Serena tenta fazer seu sonho de se tornar uma superstar se tornar realiade, mas acaba no meio da trama.");

                    //ícone do segundo canal
                    icons.push("data/imagens/icon2.png");

                     //            DADOS DO TERCEIRO CANAL   //

                    //vídeos do terceiro canal
                    sourceVideos3.push("http://www.blogger.com/video-play.mp4?contentId=33d4e692cbe29539");
                    sourceVideos3.push("http://www.blogger.com/video-play.mp4?contentId=119bdfe7f992af5d");
                    sourceVideos3.push("http://www.blogger.com/video-play.mp4?contentId=fb0301f640d881e9");
                    sourceVideos3.push("http://www.blogger.com/video-play.mp4?contentId=e258bb4d78896ffe");

                    //título dos vídeos do terceiro canal
                    schedule3.push("Episódio O1 - O Alquimista de aço");
                    schedule3.push("Episódio O2 - O começo de tudo ");
                    schedule3.push("Episódio O3 - A cidade da heresia ");
                    schedule3.push("Episódio O4 - A angustia dos alquimistas");

                    //descrição dos vídeos do terceiro canal
                    description3.push("Tendo entrado na Cidade Central, um alquimista desonroso chamado Isaac McDougal inicia seu plano de vingança<br> contra os militares. No entanto, sob o comando do coronel Roy Mustang, os militares e alquimistas estaduais tentamdetê-lo.");
                    description3.push("Em seu caminho para Liore, Edward e Alphonse relembram os eventos que os levaram a ficar presos em seus corpos<br> atuais; Por quebrar o maior tabu da alquimia. Enquanto isso, o Coronel Mustang olha para trás na primeira vez<br> que ele encontrou os irmãos Elric.");
                    description3.push("Edward e Alphonse chegam à cidade de Liore, esperando encontrar a lendária Pedra Filosofal para que possam<br> restaurar seus corpos ao normal. Aqui, encontram o Padre Cornello; Um homem que é dito para realizar milagres.<br> Como Ed e Al investigam, eles descobrem a verdade sobre Cornello.");
                    description3.push("Edward e Alphonse se interessam por transmutações biológicas depois de testemunharem uma quimera em Liore,<br> então o Coronel Mustang os apresenta a um especialista no campo: Shou Tucker, o Alquimista da Vida de Costura.<br> Enquanto isso, um assassino em série que almeja somente Alquimistas Estaduais está solto na Central.");

                    //ícone do terceiro canal
                    icons.push("data/imagens/icon3.png");
                    
                    //depois que as informações são carregadas, aqui preenchemos aquele vetor "channels" onde os canais criados
                    //vão ficar armazenados. Cada canal vai ficar armazenador é uma posição do vetor ( 0=canal1, 1=canal2 e 2=canal3)
                    //para "criar" o canal, foi feito um objeto chamado "Channel" que contem várias coisas dentro dele a respeito 
                    //dos canais. Depois eu explico mais sobre ele! Mas resumindo, aqui vamos passar informaçãos (o que o parâmetro pede) 
                    // a função que acompanha o objeto Channel: nome do canal, videos, programação e descrição.
                    channels.push(new Channel("CANAL 01 - SAKURA CARD CAPTORS", sourceVideos, schedule, description));
                    channels.push(new Channel("CANAL 02 - SAILOR MOON CLASSIC", sourceVideos2, schedule2,description2));
                    channels.push(new Channel("CANAL 03 - FULL METAL ALCHEMIST BROTHERHOOD", sourceVideos3,schedule3,description3));
                   
                    
                    //No html existe uma tag de video com o id="metadate"
                    //aqui essa id é encontrada no DOM pelo seu id e armazenada é uma variável
                    metaVideo = document.getElementById("metadate");
                    // nessa variável é adicionado um evento onde vai ter uma função que será executada
                    //responsável por pegar a duração dos vídeos ( depois ela vai ser explicada melhor)
                    metaVideo.addEventListener("durationchange",pushDuration,true);
                    //essa é outra função onde os metadados são alterados
                    //mas ela eu explico depois também!
                    changeMetadate();
                    
                    // a partir daqui thamires foi consumida pela preguiça e um princípio de tendinite
                    //logo os textos vão ser bem menores :')

                    //variavel armazenando a primeira tag video do DOM
                    video = document.getElementsByTagName("video")[0];
                    //variavel armazenando o slider do volume
                    volumeSlider = document.getElementById("volumeSlider");
                    //variavel armazenando o botao de mudar canal
                    btn_changeChannel = document.getElementById("changeChannel");
                    //variavel armazenando o botao de mudar programação
                    btn_changeSchedule = document.getElementById("changeSchedule");
                    //variavel armazenando o nome do canal
                    nameChannel = document.getElementById("channelTitle");
                    //variavel armazenando o nome do canal da programaçao
                    nameChannelSchedule = document.getElementById("channelTitleSchedule");
                    //variavel armazenando a imagem do canal
                    image = document.getElementById("imgChannel");
                    //variável armazenado o UL da programação 
                    ulSchedule = document.getElementById("schedule");  
                    //aqui eu escondo o botão de mudar programação
                    btn_changeSchedule.style.display = "none";
                     

                    //adicionando um evento para o slider do volume 
                    //e chamando a função do volume
                    volumeSlider.addEventListener("change",setvolume,false);

                         //essa função pega o valor em que foi variado o volume 
                         //com o slider e passa para o vídeo
                         function setvolume(){
                            video.volume = volumeSlider.value;
                                    };


                     //adicionando um evento no botao de mudar canal
                     //quando o usuario clica nele o numero do canal é trocado
                     btn_changeChannel.onclick = function (){
                              channelNumber++;
                        if(channelNumber >= channels.length){
                        channelNumber = 0; }
                        changeChannel(channels[channelNumber]);
                            };

                        //adicionando um evento no botao de mudar programação
                     //quando o usuario clica nele a programação do canal é trocada
                     btn_changeSchedule.onclick = function (){
                              scheduleNumber++;
                        if(scheduleNumber >= channels.length){
                        scheduleNumber = 0; }
                        changeScheduleText(scheduleNumber);
                            }; 
                        

                    
                    //função de loading para o vídeo
                    Loading = $("#carregando");
                    //defindo o valor da variável como o canal 1
                    //pois channels é o vetor dos canais na posição 0 
                    //está armazenado o canal 1
                    playingChannel = channels[0];
                    //mudando o source do video com o auxilio 
                    //de uma função que explico melhor depois
                    video.src = getSource();
                    
                    //o onended é um evento que dispara quando o vídeo chega ao seu fim
                    //e, no caso, chama uma função que vai mudar o source do vídeo
                    video.onended = function(){
                        changeVideo();
                    };
                    
                    //o onloadstart também é um evento, mas ele dispara quando o 
                    //navegador começa a procurar pelo video, a função do caso
                    //dele é que a função loading de carregamento é mostrada
                    video.onloadstart = function(){
                        Loading.show();        
                    };
                   
                   
                    // o onplay também é evento. Esse é disparado quando o vídeo
                    //está sendo tocado
                    //nele tem um if, para o caso de o dateStart não estar definido
                    //então ele define como um novo objeto contendo a Data do momento
                    // e agora como o vídeo começou ele esconde a função de loading
                    video.onplay = function(){
                        if(dateStart === undefined)
                            dateStart = new Date();
                            Loading.hide();      
                    };
                  //fim da função main 
                };



                //criação do objeto "channel" que auxilia a criação dos canais de forma prática
                // o objeto canal possui uma função que auxilia na hora de "passar" os vetores 
                //para o objeto e depois para o vetor "channels".
                //O objeto possui:
                var Channel = function(_channelName, _sourceArray,_schedule,_descriptionChannel) {
                        //nome do canal
                        this.name = _channelName;
                        //videos
                        this.sources = _sourceArray;
                        //programação
                        this.schedule = _schedule;
                        //descrição da programção
                        this.description = _descriptionChannel;
                        //data de quando o usuario abre a TV
                        this.dateStart = dateStart;
                        // a duração dos videos em forma de array
                        this.durationVideos = new Array();
                        //auxiliador na hora de percorrer 
                        //o vetor de videos
                        this.nextSource = 0;
                  };

                            //função auxiliar para mudar o source do video
                            function changeVideo(){
                                video.src = getSource();
                            };

                            //função que muda os metados
                            function changeMetadate(){

                                 //criando uma variável que armazena o canal atual
                                 //começando pelo canal 1, pois ela pega o vetor channels com a variavel currentChannel
                                 //que é inciada com 0, logo o primeiro canal
                                var thisChannel = channels[currentChannel];
                                //depois outra variável é criada e dessa vez é armazenado
                                // a quantidade de videos do canal atual
                                var thisChannelSources = thisChannel.sources.length;

                                //aqui são basicamente ifs, com setenças a serem comparadas
                                // aqui é o caso da variavel auxiliar ser maior ou igual que quantidade
                                //de videos, logo ela volta ao seu valor inicial
                                //e a variável currentChannel é somada +1
                                      if(nextDuration >= thisChannelSources) {
                                            nextDuration=0;
                                            currentChannel++;
                                    // esse é o caso se a variável currentChannel que é como o nosso canal
                                    //for maior ou igual que a quantidade de canais reais
                                      if(currentChannel >= channels.length){ 
                                        //logo o evento que pega as durações é removido
                                            metaVideo.removeEventListener("durationchange",pushDuration,true);
                                            // o video com a tag de metadata é removida, pois senão
                                            //corre o risco dela aparecer na tela com o último vídeo
                                            metaVideo.parentElement.removeChild(metaVideo);
                                            //e é passado o parametro 0 para a função que gera 
                                            //a programação na tela
                                            fillSchedule(0);
                                    //já se a variável currentChannel não for maior ou igual
                                    //ao número de canais reais
                                      } else {
                                            //as duas variaveis criadas, são inicializadas novamente
                                            //com as informações do canal atual
                                            thisChannel = channels[currentChannel];
                                            thisChannelSources = thisChannel.sources.length;    
                                                    }

                                             }
                                //aqui uma variável é criada para armazenar o video
                                //em que a função está examinando no momento
                                var atualVideo = thisChannel.sources[nextDuration];
                                //então o nosso video com metadate recebe o video
                                metaVideo.src = atualVideo;
                                //e a variável é somada + 1 para o próximo video 
                                //ser analizado
                                nextDuration++;
                                   };

                        //essa função é responsável por cuidar do armazenamento das durações dos vídeos
                        function pushDuration(){
                            //uma variável é criada para receber a duração do vídeo que está
                            //sendo rodado na tag vídeo com o id=metadate
                           var duration =  metaVideo.duration;
                           //nessa parte o vetor de durações é preenchido
                           //com a duração do vídeo do canal atual
                           channels[currentChannel].durationVideos.push(duration);
                           //depois a função de troca de metadatos é chamada
                           //para o próximo vídeo ter sua duração armazenada
                           changeMetadate();
                                    
                                };

                            //essa função é responsável pela trocas dos vídeos no canal
                            function getSource(){
                                //uma variável chamada lenght é criada e recebe como valor
                                //o tamanho de vídeos do canal atual
                                var length = playingChannel.sources.length;
                               //depois um  if é feito para o caso da variavel auxiliar
                               //que ajuda na mudança de canais ser maior que o número de vídeos do canal 
                                if(nextSource >= length){
                                    //logo ela é zerada, voltando para o primeiro video
                                    //do primeiro canal
                                        nextSource = 0;
                                    }
                                    //essa função retorna o vídeo do canal atual
                                    //de acordo com o número da variável nextsource
                                    //e também já soma +1 a variável 
                                    return playingChannel.sources[nextSource++];
                               };

                              //função responsável por criar a programação dos canais 
                            function creatingSchedule(channel){
                                //cria um vetor para a programação
                                scheduleArray = new Array();
                                //cria variáveis inicializadas com zero
                                //para armazenar a hora, minutos e segundos da programação
                                //e a soma que vai ser explicada depois
                                var hour = 0, minutes = 0, seconds = 0, sum = 0;
                                //uma variável é criada para armazenar o numero dos canais
                                var sourceslenght = channel.sources.length;
                                //e aqui é pegue o tempo da data inicial e é armazenado em uma variável
                                var scheduleDate = new Date(dateStart.getTime());

                                // um for é criado para ajudar na geração da programação
                                // e só funciona até o contador ser menor que o numero de canais
                                for(var cont = 0; cont < sourceslenght; cont++ ){
                                        //depois que a data do momento é pegue, ele é somada
                                        // ao valor da variavel sum ( soma)
                                        scheduleDate = new Date(sum + dateStart.getTime());
                                        // soma é igual a sua soma + a duração dos vídeos
                                        //do canal atual do contador x 1000
                                        sum = sum + channel.durationVideos[cont] * 1000;
                                        //as horas da programação da variavel são pegues
                                        hour = scheduleDate.getHours();
                                        //assim como os minutos
                                        minutes = scheduleDate.getMinutes();
                                        // e os segundos
                                        seconds = scheduleDate.getSeconds();
                                            //essa parte é puramente por estética
                                            //esses if's acrescentam um 0 para não ficar apenas 1:0 e sim 01:00
                                        if( minutes < 10)  minutes = "0" + minutes;
                                        if( hour < 10) hour = "0" + hour;
                                        if( seconds < 10)seconds = "0" + seconds;

                                        //aqui é armazenado o texto geral da programação (hora, minuto, segundo e nome do video)  
                                        //no vetor da programação. É usado novamente o comando push  
                                        scheduleArray.push( "Horário: " + hour + ":" + minutes + ":" + seconds +  " — " +  "Nome: " + channel.schedule[cont]);
                                }
                                //depois dos if's finalizarem ele retorna o vetor 
                               //da programação preenchido  
                                return scheduleArray;
                            };

                                //essa função segue a mesma lógica da anterior
                                //e gera a descrição do vídeo do canal
                                function creatingDescription(channel){
                                    //um vetor para as descrições é criado
                                    descriptionArray = new Array();
                                    //é armazenado a quantidade de canais
                                    var sourceslenght = channel.sources.length;
                                    //um for é feito para auxiliar o processo 
                                    for(var cont = 0; cont < sourceslenght; cont++ ){
                                        //o vetor é preenchido com as descrições armazenadas em um vetor
                                        //prévio de acordo com o número do vídeo
                                            descriptionArray.push( "Descrição: " + channel.description[cont]);
                                    }
                                    //e depois retorna o vetor preenchido
                                    return descriptionArray;
                                };

                                    //função responsável por mudar o canal
                                    function changeChannel(channel){
                                        // variável armazenando a data do momento
                                        var atualDate = new Date();
                                        //delta calculando o tempo final - incial
                                        //no caso o tempo final é a data que acabou de ser pegue
                                        // e o incial é aquela data de quando o vídeo começou
                                        var delta = atualDate.getTime() - dateStart.getTime();
                                        //como a data é em milisegundos o delta é dividido por mil
                                         delta = (delta/1000) ;
                                         //variável armazenado a o tamanho do vetor de duração dos vídeos
                                        var durationLenght = channel.durationVideos.length;
                                        //variávels sendo criadas para auxiliar o processo
                                        var sum = 0, time, scheduleArray, descriptionArray;
                                        //um for faz o processo de acordo com o tamanho do vetor
                                        //de durações
                                        //essa parte é pra deixar a programção dos vídeos
                                        //em paralelo
                                        for(var cont = 0; cont< durationLenght; cont++){
                                            //a variável soma recebe seu valor + a duração do vídeo
                                            //de acordo com o contador
                                            sum = sum + channel.durationVideos[cont];
                                        }
                                        //esse if é  para checar o delta
                                        //se o delta for maior ou igual a soma
                                        //que é a duração dos canais
                                        if(delta >= sum){
                                            //time recebe o calculo da porcentagem 
                                            //das variáveis
                                            time = delta % sum;
                                        }
                                        else{
                                            //senão, time recebe o valor de delta
                                            time = delta;
                                        }
                                        
                                       //é criado um contador, sendo iniciado por zero 
                                        var cont = 0; 
                                        //enquanto o tempo for maior que a duração do video atual
                                        while(time> durationVideos[cont]){
                                            //tempo vai ser igual o tempo - a duração do video
                                            time = time - durationVideos[cont];
                                            //aqui o contador é incrementado +1
                                            cont++;
                                        };
                                        
                                        //playingChannel recebendo o vetor channel (onde estão os canais)
                                        playingChannel = channel;
                                        //o nome do canal sendo mudado de acordo com o canal atual 
                                        nameChannel.innerHTML = playingChannel.name;
                                        //o video sendo carregado de acordo com o canal atual
                                        video.src = playingChannel.sources[cont];
                                        //o icone sendo mudado de acordo com o canal atual
                                        image.src = icons[channelNumber];
                                        //o video recebendo o tempo transcorrido
                                        video.currentTime = time;
                                        //a programação aparecendo de acordo
                                        //com o canal atual 
                                        fillSchedule(cont);
                                        
                                    };

                        //função responsável por mostrar a programação na tela
                        //ela tem como base o canal atual da TV Digital, gerando
                        //a programação em função disso
                        function fillSchedule(){

                             scheduleArray = creatingSchedule(playingChannel);
                             descriptionArray = creatingDescription(playingChannel);
                             //informações da lista sendo apagadas
                             ulSchedule.innerHTML = "";
                             //eu optei por só deixar o botão de mudar a programação visível
                             //quando ela estivesse pronta para isso
                             //por isso aqui o botão "volta" a tela
                             btn_changeSchedule.style.display = "initial";
                            
                            //muda o nome do canal da programação 
                            nameChannelSchedule.innerHTML = channels[channelNumber].name;

                            //contador responsável por auxiliar na programação
                            for(var cont = 0; cont < scheduleArray.length; cont++)
                            {
                                //cria os itens da lista
                                var li = document.createElement("li");
                                var li2 = document.createElement("li");
                                 //nomeia-os com classes equivalentes ao seu conteúdo
                                li.className = "schedule";
                                li2.className = "description";
                                //preenche os itens de acordo com o canal e video
                                li.innerHTML = scheduleArray[cont];
                                li2.innerHTML = descriptionArray[cont];
                                //adiciona ao DOM os itens da lista 
                                ulSchedule.appendChild(li);
                                ulSchedule.appendChild(li2);
                              
                                
                            }
                        };



                         //essa função pega como parametro um numero que varia de 0 a 2 (quantidade de canais)
                         //depois, de acordo com o numero, acessa a programação, a descrição e o nome do canal
                         //referente ao número recebido. Em seguida, armazena as informações em um outro vetor
                         //a mensagem que ficava dentro da lista é apagada e começa a ser preenchida com itens
                         //um contador auxilia esse processo que é basicamente
                        function changeScheduleText(id){ 

                            scheduleArray = creatingSchedule(channels[id]); 
                            descriptionArray = creatingDescription(channels[id]); 
                            //informações da lista sendo apagadas
                            ulSchedule.innerHTML = ""; 

                            //muda o nome do canal da programaçao 
                           nameChannelSchedule.innerHTML = channels[id].name;
                            for(var cont = 0; cont < scheduleArray.length; cont++) 
                            { 
                                //cria os itens da lista
                                var li = document.createElement("li"); 
                                var li2 = document.createElement("li"); 
                                //nomeia-os com classes equivalentes ao seu conteúdo
                                li.className = "schedule"; 
                                li2.className = "description"; 
                                //preenche os itens de acordo com o canal e video
                                li.innerHTML = scheduleArray[cont]; 
                                li2.innerHTML = descriptionArray[cont];
                                //adiciona ao DOM os itens da lista 
                                ulSchedule.appendChild(li); 
                                ulSchedule.appendChild(li2); 
                            }   
                                 
                        } 

                        //obrigada artur e davi que ajudaram a essa TV se tornar realidade :')

