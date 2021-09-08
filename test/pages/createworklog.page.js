const Page = require('./page');
class CreateWorklogPage extends Page{
    open(){
        // TODO:url needs to be added
        super.open('');
    }
    get crossIcon(){
        return $('img.styles_navIconCancel__1H9sx');
    }
    get ctiLogo(){
        return $('src*=/static/media/logo.6fe1eebd');
    }
    get detailsText(){
        return $('p.styles_secDivTitle1__1RUFB');
    }
    get stepsText(){
        return $('p.styles_secDivTitle2__1lDwM');
    }
    get heyStudentNameText(){
        return $('h5*=what have you been up to lately?');
    }
    get whereHaveYouBeenWorkingQues(){
        return $('p=Where have you been working?');
    }
    get inputWhereHaveYouBeenWorking(){
        return $("//input[@placeholder='Jobsite Name or Street Address']");
    }
    get whatWasBeingConstructedQues(){
        return $('p=What was being constructed?');
    }
    get inputOtherWhatWasBeingConstructed(){
        return $('input#otherWorkPlace');
    }
    get nextButton(){
        return $('button.styles_btn__2d3KO');
    }

    // Step 2/3
    get tasksText(){
        return $('p.styles_secDivTitle1__1RUFB');
    }
    get stepTwoByThreeText(){
        return $('p.styles_secDivTitle2__1lDwM');
    }
    get haveYouGotAPhotoOfTask(){
        return $('p=Have you got a photo of task?');
    }
    get optionYesHaveYouGotAPhotoOfTask(){
        return $('input#Yes');
    }
    get optionNoHaveYouGotAPhotoOfTask(){
        return $('input#No');
    }
    // option provided when selecting Yes
    get browseWhenNoHaveYouGotAPhotoOfTaskIsYes(){
        return $("//input[@accept='image/*']");
    }
    get whatsHappeningInThisPhoto(){
        return $('p=What’s happening in this photo?');
    }
    get inputWhatsHappeningInThisPhoto(){
        return $("//input[@placeholder='Provide details of photo here']");
    }
    get whichSupervisiorVerifyYourActiviyAndPhotoQues(){
        return $('p=Which supervisor can verify your activity and photo?');
    }
    // both Yes and No
    get howLongDidItTake(){
        return $("//input[@placeholder='Enter the duration here..']");
    }
    get inputHowLongDidItTake(){
        return $("//input[@placeholder='Enter the duration here..']");
    }
    // option provided when selecting No
    get whatWasYourPartInTheActivity(){
        return $('p=What was your part in the activity?');
    }
    get inputWhatWasYourPartInTheActivity(){
        return $("//input[@placeholder='Details about your part in Activity']");
    }

    // TODO: check-box remaining
    get addMoreSupervisiors(){
        return $("//input[@placeholder='Add More']");
    }
    get addMoreSupervisiorBtn(){
        return $('button=Add More');
    }

    // TODO: Overdue tasks

    // TODO: Current tasks
    
    // Back and Next button button=Back
    get backBtn(){
        return $('button=Back');
    }
    get nextbtn(){
        return $('button=Next');
    }

    // step 3/3
    get commentsText(){
        return $('p.styles_secDivTitle1__1RUFB');
    }
    get stepThreeByThreeText(){
        return $('p.styles_secDivTitle2__1lDwM');
    }
    get anyOtherCommentsAboutYourActivityQues(){
        return $('p=Any other comments you want to say about your activity?');
    }
    get inputAnyOtherCommentsAboutYourActivity(){
        return $("//textarea[@placeholder='Enter comments about the activity']");
    }
    get anyOtherOverallCommentsQues(){
        return $('p=Any other overall comments?');
    }
    get inputAnyOtherOverallComments(){
        return $("//textarea[@placeholder='Enter any other overall comments']");
    }

    // ============== Pop Up ==============
    get areYouSureYouWantToQuitText(){
        return $('h5=Are you sure you want to quit?');
    }
    get thisWorklogWillBeErasedText(){
        return $('h6=This worklog will be erasesd.');
    }
    get cancelBtn(){
        return $('button=CANCEL');
    }
    get eraseBtn(){
        return $('button=ERASE');
    }

    // ============== Summary ==============
    // TODO: Add remaining getters
    get (){
        return $('');
    }
    get saveForLaterBtn(){
        return $('button=Save for Later');
    }
    get submitNowBtn(){
        return $('button=Submit Now');
    }

}

module.exports = new CreateWorklogPage();