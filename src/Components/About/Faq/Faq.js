import React from 'react';
import './Faq.css';
import faq from '../Faq/images/faq.svg';

const Faq = () => {
    return (
        <div className="container-fluid bg-white py-5">
            <div className="container">
                <h1 className="fw-bold">Frequently Asked Questions</h1>
                <div className="row pt-5 d-flex align-items-center">
                    {/* first - column */}
                    <div className="col-lg-6">
                        <img src={faq} style={{ width: "800px" }} className="img-fluid" alt="" />
                    </div>
                    {/* second - column */}
                    <div className="col-lg-6">
                        <div class="accordion" id="accordionExample">
                            {/* accordion-item-1 */}
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        When should I use Heart Line?
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Heart Line helps address common medical and behavioral health issues. for example: psychotherapy, Cardiology, Allergic diseases, Diet control, Child Health, Covid-19 Care etc.
                                    </div>
                                </div>
                            </div>
                            {/* accordion-item-2 */}
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How often are Heart Line patients redirected to in-person care?
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Less than 5% of visits are redirected to in-person care for appropriate evaluation.
                                    </div>
                                </div>
                            </div>
                            {/* accordion-item-3 */}
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Why do I need a webcam or video-enabled mobile app?
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        In some states, a video connection is required by law. Even where it is not required, a video connection allows our board-certified medical/psychiatry providers and licensed therapists to deliver the best possible care. When a provider can see you, she/he can better assess your condition and monitor visual cues. Please be advised that it’s at the provider’s discretion as to whether a video consultation is necessary. A video connection can be made using your computer’s webcam, or through the MeMD app.
                                    </div>
                                </div>
                            </div>
                            {/* accordion-item-4 */}
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFour">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        I don't have access to a video connection – is there another way the doctor can see my rash?
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        If your Heart Line provider feels comfortable treating your condition via a phone-only visit, you may submit pictures online through your MeMD account that can be uploaded to your medical chart for review. If you are unable to do this yourself, one of our Care Coordinators can help.
                                    </div>
                                </div>
                            </div>
                            {/* accordion-item-5 */}
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFive">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        My 6-year-old daughter is sick – can she use my account for a visit?
                                    </button>
                                </h2>
                                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        No, you will need to create a separate profile for any children, dependents or spouses. This ensures each person has his/her own medical profile and medical history.
                                    </div>
                                </div>
                            </div>
                            {/* accordion-item-6 */}
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingSix">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        Can MeMD be my primary care provider?
                                    </button>
                                </h2>
                                <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Unfortunately, no. We do want to support your care between office visits, though, such as when you are traveling or when you have a limited condition, such as an infection, flu or allergies that needs quick and convenient treatment.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;