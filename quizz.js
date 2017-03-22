
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
            "question"      :   "Quel pays reçoit le plus de primo-demandes d’asile (hors UE) en Europe?",
            "image"         :   "",
            "choices"       :   [
                                    "L'Italie",
                                    "Le Royaume-Uni",
                                    "La France",
                                    "L'Allemagne"
                                ],
            "correct"       :   "L'Allemagne",
            "explanation"   :   "L'Allemagne est la bonne réponse car elle a reçu plus de 400 000 demandes d’asile en 2015 (contre plus de 150 000 en 2014), loin devant l’Italie (5ème place: presque 100 000), la France (6ème place: plus de 50 000) et le Royaume-Uni (9ème place: moins de 50 000). ", /* Ici, tapez exactement l'intitulé de la réponse correcte plus haut (il faut que ce soit EXACTEMENT la même chaine de caractère */
        },
        {
            "question"      :   "Quel est le premier pays d’origine des primo-demandeurs d’asile (hors UE) en Europe?",
            "image"         :   "",
            "choices"       :   [
                                    "Le Soudan",
                                    "Le Congo",
                                    "La Syrie",
                                    "L'Iraq"
                                ],
            "correct"       :   "La Syrie",
            "explanation"   :   "La Syrie est la bonne réponse car plus de 350 000 primo-demandeurs d’asile en Europe étaient Syriens en 2015 (contre plus de 100 000 en 2014). Cela place la Syrie bien loin devant les autres pays d’origine (plus de 150 000 primo-demandeurs viennent d’Afghanistan qui arrive en 2ème place).",
        },
        {
             "question"      :   "Quel pourcentage des primo-demandeurs d’asile (hors UE) sont des hommes?",
            "image"         :   "",
            "choices"       :   [
                                    "Plus de 90%",
                                    "Entre 70% et 90%",
                                    "Entre 50% et 70%",
                                    "Moins de 50%"
                                ],
            "correct"       :   "Entre 70% et 90%",
            "explanation"   :   "Entre 70% et 90% est la bonne réponse car plus de 70% des primo-demandeurs d’asile en Europe sont des hommes.",
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
                $('.choice').eq(choice).css({'background-color':'#50D943'});
                $('#explanation').html('<strong>Ouais mec!</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
                score++;
            } else {
                $('.choice').eq(choice).css({'background-color':'#D92623'});
                $('#explanation').html('<strong>Mais quelle tâche</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
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
            $('#question').text("Vous avez " + score + " réponse sur " + quiz.length + " correctes.");
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
