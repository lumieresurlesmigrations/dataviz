
    /** Simple JavaScript Quiz
     * version 0.1.0
     * http://journalism.berkeley.edu
     * created by: Jeremy Rue @jrue
     *
     * Copyright (c) 2013 The Regents of the University of California
     * Released under the GPL Version 2 license
     * http://www.opensource.org/licenses/gpl-2.0.php
     * This program is distributed in the hope that it will be useful, but
     * WITHOUT ANY WARRANTY; without even the implied warranty of
     * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
     */
    var quiztitle = "";
    /**
    * Set the information about your questions here. The correct answer string needs to match
    * the correct choice exactly, as it does string matching. (case sensitive)
    *
    */
    var quiz = [
        {
            "question"      :   "Quel pays a reçu le plus de demandes d’asile (de ressortissants de pays tiers) dans l'UE en 2015 (premières demandes) ?",
            "image"         :   "",
            "choices"       :   [
                                    "L'Italie",
                                    "Le Royaume-Uni",
                                    "La France",
                                    "L'Allemagne"
                                ],
            "correct"       :   "L'Allemagne",
            "explanation"   :   "L'Allemagne a reçu 441 800 primo-demandes d’asile de ressortissants de pays tiers en 2015 (contre 172 945 en 2014), loin devant l’Italie (5ème place: 83 245 demandes), la France (6ème place: 70 570) et le Royaume-Uni (9ème place: moins de 38 370). (Source: Eurostat)", /* Ici, tapez exactement l'intitulé de la réponse correcte plus haut (il faut que ce soit EXACTEMENT la même chaine de caractère */
        },
        {
            "question"      :   "Quel est le premier pays d’origine des demandeurs d’asile (ressortissants de pays tiers) en UE en 2015 (premières demandes) ?",
            "image"         :   "",
            "choices"       :   [
                                    "Le Soudan",
                                    "Le Congo",
                                    "La Syrie",
                                    "L'Iraq"
                                ],
            "correct"       :   "La Syrie",
            "explanation"   :   "362 775 primo-demandeurs d’asile ressortissants de pays tiers en UE étaient Syriens en 2015 (contre 119 000 en 2014). Cela place la Syrie bien loin devant les autres pays d’origine (178 230 primo-demandeurs viennent d’Afghanistan qui arrive en 2ème place). (Source: Eurostat)",
        },
        {
             "question"      :   "Quel pourcentage de demandeurs d’asile (ressortissants de pays tiers) en UE sont des hommes en 2015 (premières demandes) ?",
            "image"         :   "",
            "choices"       :   [
                                    "Plus de 90 %",
                                    "Entre 70 % et 90 %",
                                    "Entre 50 % et 70 %",
                                    "Moins de 50 %"
                                ],
            "correct"       :   "Entre 70 % et 90 %",
            "explanation"   :   "73 % des primo-demandeurs d’asile ressortissants de pays tiers en UE sont des hommes. (Source: Eurostat)",
        },
        {
             "question"      :   "Combien de réfugiés la France a-t-elle accueilli dans le cadre des accords européens de relocalisation d'urgence de septembre 2015?",
            "image"         :   "",
            "choices"       :   [
                                    "Moins de 3 000",
                                    "Entre 3 000 et 6 000",
                                    "Entre 6 000 et 10 000",
                                    "Plus de 10 000"
                                ],
            "correct"       :   "Entre 3 000 et 6 000",
            "explanation"   :   "En date du 22 mars 2017, la France a accueilli 5 490 réfugiés dans le cadre de ces accords, dont 2 476 qui étaient arrivés par la Grèce et 282 par l'Italie. Il reste donc à la France à accueillir 16 956 réfugiés pour respecter les quotas européens d'ici fin 2017. (Source: Commission européenne)",
        },       
         {
            "question"      :   "Combien touchent les passeurs pour une traversée de la Méditerranée ?",
            "image"         :   "",
            "choices"       :   [
                                    "Moins de 100 €",
                                    "Entre 100 € et 700 €",
                                    "Entre 700 € et 2 000 €",
                                    "Plus de 2 000 €"
                                ],
            "correct"       :   "Entre 700 € et 2 000 €",
            "explanation"   :   "Les passeurs touchent entre 700 € et 2 000 € pour une traversée de la Méditerranée, dans des conditions pourtant désastreuses puisque le gilet de sauvetage est en option (170 €) ainsi que le téléphone portable (250 € le coup de fil). (Source: vidéo Data Gueule)",
        },
         {
            "question"      :   "Combien coûte au maximum une traversée de la Manche depuis Calais ?",
            "image"         :   "",
            "choices"       :   [
                                    "1 000 €",
                                    "5 000 €",
                                    "10 000 €",
                                    "20 000 €"
                                ],
            "correct"       :   "20 000 €",
            "explanation"   :   "Pour 20 000 €, le migrant a une place assise en cabine avec le conducteur du camion, et une seconde chance en cas d’échec... (Source: vidéo Data Gueule)",
        },
         {
            "question"      :   "En 2014, quelle est la part des migrants décédés dans le monde qui ont péri en Méditerranée ?",
            "image"         :   "",
            "choices"       :   [
                                   "Moins de 25 %",
                                   "Entre 25 % et 50 %",
                                   "Entre 50 % et 75 %",
                                   "75 % ou plus"
                                ],
            "correct"       :   "75 % ou plus",
            "explanation"   :   "En 2014, plus de 75 % des migrants décédés dans le monde ont péri en Méditerranée. (Source: vidéo Data Gueule)",
        },
           {
            "question"      :   "En 2012, quelle était la part des immigrés entrés en France qui étaient au moins titulaires d'un diplôme de niveau baccalauréat?",
            "image"         :   "",
            "choices"       :   [
                                   "Moins de 25 %",
                                   "Entre 25 % et 50 %",
                                   "Entre 50 % et 75 %",
                                   "75 % ou plus"
                                ],
            "correct"       :   "Entre 50 % et 75 %",
            "explanation"   :   " En 2012, 63 % des immigrés entrés en France sont au moins titulaires d'un diplôme de niveau baccalauréat. (Source: INED)",
        },
             {
            "question"      :   "En 2012, quelle était la part des immigrés entrés en France d'origine tunisienne, algérienne ou marocaine qui avaient un niveau d'éducation supérieur à la moyenne de leur pays respectif?",
            "image"         :   "",
            "choices"       :   [
                                   "Moins de 10 %",
                                   "Entre 25 % et 50 %",
                                   "Entre 50 % et 75 %",
                                   "75 % ou plus"
                                ],
            "correct"       :   "Entre 50 % et 75 %",
            "explanation"   :   "En 2012, entre 50% et 75% des immigrés d'origine tunisienne, algérienne ou marocaine avaient un niveau d'instruction supérieur à la moyenne de leurs pays respectifs. Le constat est d'ailleurs le même pour les Sénégalais ou les Vietnamiens. Seuls les immigrés d'origine serbe, turque, portugaise ou roumaine ont plus souvent des niveaux d'éducation inférieurs à la moyenne de leur pays respectif. (Source: INED) ",
        },
    ];
    /******* No need to edit below this line *********/
    var currentquestion = 0, score = 0, submt=true, picked;
    jQuery(document).ready(function($){
        /**
         * HTML Encoding function for alt tags and attributes to prevent messy
         * data appearing inside tag attributes.
         */
        function htmlEncode(value){
          return $(document.createElement('div')).text(value).html();
        }
        /**
         * This will add the individual choices for each question to the ul#choice-block
         *
         * @param {choices} array The choices from each question
         */
        function addChoices(choices){
            if(typeof choices !== "undefined" && $.type(choices) == "array"){
                $('#choice-block').empty();
                for(var i=0;i<choices.length; i++){
                    $(document.createElement('li')).addClass('choice choice-box').attr('data-index', i).text(choices[i]).appendTo('#choice-block');                    
                }
            }
        }
        
        /**
         * Resets all of the fields to prepare for next question
         */
    function nextQuestion(){
            submt = true;
            $('#explanation').empty();
            $('#question').text(quiz[currentquestion]['question']);
            $('#pager').text('Question ' + Number(currentquestion + 1) + ' sur ' + quiz.length);
            if(quiz[currentquestion].hasOwnProperty('image') && quiz[currentquestion]['image'] != ""){
                if($('#question-image').length == 0){
                    $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question'])).insertAfter('#question');
                } else {
                    $('#question-image').attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question']));
                }
            } else {
                $('#question-image').remove();
            }
            addChoices(quiz[currentquestion]['choices']);
            setupButtons();
        }

        /**
         * After a selection is submitted, checks if its the right answer
         *
         * @param {choice} number The li zero-based index of the choice picked
         */
     function processQuestion(choice){
            if(quiz[currentquestion]['choices'][choice] == quiz[currentquestion]['correct']){
                $('.choice').eq(choice).css({'background-color':'#146b01'});
                $('#explanation').html('<strong>Bonne réponse!</strong> ' + htmlEncode(quiz[currentquestion]['explanation'])).css({'color':'#146b01'});
                score++;
            } else {
                $('.choice').eq(choice).css({'background-color':'#D92623'});
                $('#explanation').html('<strong>Mauvaise réponse!</strong> ' + htmlEncode(quiz[currentquestion]['explanation'])).css({'color':'#D92623'});
            }
                currentquestion++;
            $('#submitbutton').html('QUESTION SUIVANTE &raquo;').on('click', function(){
                if(currentquestion == quiz.length){
                    endQuiz();
                } else {
                    $(this).text('Vérifier sa réponse').css({'color':'#222'}).off('click');
                    nextQuestion();
                }
            })
        }
        /**
         * Sets up the event listeners for each button.
         */
        function setupButtons(){
            $('.choice').on('mouseover', function(){
                $(this).css({'background-color':'rgba(174,194,203,0.5)'});
            });
            $('.choice').on('mouseout', function(){
                $(this).css({'background-color':'rgb(174,194,203)'});
            })
            $('.choice').on('click', function(){
                picked = $(this).attr('data-index');
                $('.choice').removeAttr('style').off('mouseout mouseover');
                $(this).css({'border-color':'#222','font-weight':700,'background-color':'rgba(170,198,186,0.7)'});
                if(submt){
                    submt=false;
                    $('#submitbutton').css({'color':'#000'}).on('click', function(){
                        $('.choice').off('click');
                        $(this).off('click');
                        processQuestion(picked);
                    });
                }
            })
        }
        
        /**
         * Quiz ends, display a message.
         */
        function endQuiz(){
            $('#explanation').empty();
            $('#question').empty();
            $('#choice-block').empty();
            $('#submitbutton').remove();
            $('#question').text("Vous avez " + score + " réponse(s) sur " + quiz.length + " correctes.");
            $(document.createElement('h2')).css({'text-align':'center', 'font-size':'4em'}).text(Math.round(score/quiz.length * 100) + '%').insertAfter('#question');
        }
        /**
         * Runs the first time and creates all of the elements for the quiz
         */
        function init(){
            //add title
            if(typeof quiztitle !== "undefined" && $.type(quiztitle) === "string"){
                $(document.createElement('h1')).text(quiztitle).appendTo('#frame');
            } else {
                $(document.createElement('h1')).text("Quiz").appendTo('#frame');
            }
            //add pager and questions
            if(typeof quiz !== "undefined" && $.type(quiz) === "array"){
                //add pager
                $(document.createElement('p')).addClass('pager').attr('id','pager').text('Question 1 sur ' + quiz.length).appendTo('#frame');
                //add first question
                $(document.createElement('h2')).addClass('question').attr('id', 'question').text(quiz[0]['question']).appendTo('#frame');
                //add image if present
                if(quiz[0].hasOwnProperty('image') && quiz[0]['image'] != ""){
                    $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[0]['image']).attr('alt', htmlEncode(quiz[0]['question'])).appendTo('#frame');
                }
                $(document.createElement('p')).addClass('explanation').attr('id','explanation').html('&nbsp;').appendTo('#frame');
            
                //questions holder
                $(document.createElement('ul')).attr('id', 'choice-block').appendTo('#frame');
            
                //add choices
                addChoices(quiz[0]['choices']);
            
                //add submit button
                $(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Vérifier sa réponse').css({'font-weight':700,'color':'#222','padding':'30px 0'}).appendTo('#frame');
            
                setupButtons();
            }
        }
        
        init();
    });
