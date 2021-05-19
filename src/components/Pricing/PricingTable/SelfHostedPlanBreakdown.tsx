import React from 'react'

import { Structure } from '../../Structure'
import { PricingSlider } from '../../PricingSlider'
import { CallToAction } from '../../CallToAction'

import checkIcon from '../../../images/check.svg'

export const SelfHostedPlanBreakdown = () => {
    return (
        <Structure.Section width="full w-full" className="pt-6 pb-12">
            <p className="text-center text-white text-opacity-75 pb-4">
                Low event volume? Use our{' '}
                <a href="https://github.com/posthog/posthog" className="text-orange">
                    open source version
                </a>{' '}
                totally free with community support.
            </p>
            <div className="flex justify-center items-center">
                <div className="flex-0 border border-white border-opacity-10 rounded p-4 m-8 ml-0">
                    <h3 className="text-lg m-0">Free</h3>
                    <p className="opacity-50 text-sm">Get for startups</p>
                    <ul className="list-none pl-0 mb-6">
                        <li className="mb-1">
                            <span className="text-base font-bold">1 million</span>
                            &nbsp;
                            <span className="text-sm text-white text-opacity-75">tracked users</span>
                        </li>
                        <li className="mb-1">
                            <span className="text-base font-bold">1</span>
                            &nbsp;
                            <span className="text-sm text-white text-opacity-75">project</span>
                        </li>
                        <li className="mb-1">
                            <span className="text-base font-bold">3</span>
                            &nbsp;
                            <span className="text-sm text-white text-opacity-75">team members</span>
                        </li>
                    </ul>
                    <ul className="list-none text-white text-opacity-70 text-sm pl-0 mb-6">
                        <li className="flex align-center mb-2">
                            <img src={checkIcon} alt="checkmark" width="20" height="20" className="flex-0 mr-2" />
                            <span className="">
                                Easy upgrade to <em>Scale</em>
                            </span>
                        </li>
                        <li className="flex align-center mb-2">
                            <img src={checkIcon} alt="checkmark" width="20" height="20" className="flex-0 mr-2" />
                            <span className="">Community support</span>
                        </li>
                    </ul>

                    <div className="opacity-50">Price</div>
                    <div className="flex items-baseline">
                        <div className="text-lg font-bold">Free</div>
                    </div>

                    <div>
                        <CallToAction icon="none" href="#" className="my-4">
                            Request access
                        </CallToAction>
                    </div>

                    <div className="text-center text-xs text-opacity-50 text-white mt-2">No credit card required</div>
                </div>

                <div className="rounded inline-flex flex-col md:flex-row items-center">
                    <div className="flex justify-center">
                        <div className="bg-deep-blue bg-opacity-30 rounded-lg p-8 inline-flex flex-col md:flex-row items-center text-white">
                            <div className="flex-0 border border-white border-opacity-10 rounded p-8 bg-royal-blue">
                                <h3 className="text-lg m-0">Scale</h3>
                                <p className="opacity-50 text-sm">For large userbases or event volume</p>
                                <ul className="list-none pl-0 mb-6">
                                    <li className="mb-1">
                                        <span className="text-base font-bold">Unlimited</span>
                                        &nbsp;
                                        <span className="text-sm text-white text-opacity-75">tracked users</span>
                                    </li>
                                    <li className="mb-1">
                                        <span className="text-base font-bold">Unlimited</span>
                                        &nbsp;
                                        <span className="text-sm text-white text-opacity-75">projects</span>
                                    </li>
                                    <li className="mb-1">
                                        <span className="text-base font-bold">Unlimited</span>
                                        &nbsp;
                                        <span className="text-sm text-white text-opacity-75">team members</span>
                                    </li>
                                </ul>
                                <ul className="list-none text-white text-opacity-70 text-sm pl-0 mb-6">
                                    <li className="flex align-center mb-2">
                                        <img
                                            src={checkIcon}
                                            alt="checkmark"
                                            width="20"
                                            height="20"
                                            className="flex-0 mr-2"
                                        />
                                        <span className="">Collaboration features</span>
                                    </li>
                                    <li className="flex align-center mb-2">
                                        <img
                                            src={checkIcon}
                                            alt="checkmark"
                                            width="20"
                                            height="20"
                                            className="flex-0 mr-2"
                                        />
                                        <span className="">User permissions</span>
                                    </li>
                                    <li className="flex align-center">
                                        <img
                                            src={checkIcon}
                                            alt="checkmark"
                                            width="20"
                                            height="20"
                                            className="flex-0 mr-2"
                                        />
                                        <span className="">Dedicated support</span>
                                    </li>
                                </ul>

                                <div className="opacity-50">Monthly estimate</div>
                                <div className="flex items-baseline">
                                    <div className="text-lg font-bold">$2,000</div> {/* price value from slider */}
                                    <div className="opacity-50">/mo for&nbsp;</div>
                                    <div className="opacity-50">8,000,000 events</div> {/* event value from slider */}
                                </div>

                                <div>
                                    <CallToAction icon="none" href="#" className="my-4">
                                        Contact us
                                    </CallToAction>
                                </div>

                                <div className="text-center text-xs text-opacity-50 text-white mt-2">
                                    $2,000 monthly minimum
                                    <br />
                                    No setup costs
                                </div>
                            </div>
                            <div className="flex-0 mt-8 md:mt-0 md:ml-8 max-w-lg">
                                <h3 className="mb-1">Calculate your price</h3>
                                <p className="text-sm text-white text-opacity-60">
                                    Pay based on the events you capture each month.
                                </p>

                                <div className="mb-4">
                                    <div className="flex justify-between items-center">
                                        <div className="mb-0 text-sm font-bold text-white text-opacity-75">
                                            Monthly event volume
                                        </div>
                                        <div className="font-bold text-base">1,000,000</div>{' '}
                                        {/* event value from slider */}
                                    </div>
                                    slider
                                    <br />
                                    <div className="text-xs opacity-50">
                                        &lt;8 million, 10 million, 100 million, 150 million
                                        {/* Ideal: slider labels should be spaced realistically based on values, not evenly */}
                                    </div>
                                </div>

                                <div className="mb-4 border border-white border-opacity-10 bg-royal-blue rounded">
                                    <div
                                        className="flex justify-between items-baseline p-2 rounded mb-1"
                                        style={{ backgroundColor: '#1A2460' }}
                                    >
                                        <div className="mb-0 text-xs text-white text-opacity-75">Event volume</div>
                                        <div className="opacity-50 text-2xs text-right">Monthly price per event</div>
                                    </div>
                                    <dl className="flex justify-between mb-1 p-2">
                                        <dt className="mb-0 opacity-75 text-xs">First 10 million</dt>
                                        <dd className="mb-0 font-bold text-xs">$0.000225</dd>
                                    </dl>
                                    <dl className="flex justify-between mb-1 p-2">
                                        <dt className="mb-0 opacity-75 text-xs">10-100 million</dt>
                                        <dd className="mb-0 font-bold text-xs">$0.000045</dd>
                                    </dl>
                                    <dl className="flex justify-between mb-1 p-2">
                                        <dt className="mb-0 opacity-75 text-xs">100 million - 1 billion</dt>
                                        <dd className="mb-0 font-bold text-xs">$0.000009</dd>
                                    </dl>
                                    <dl className="flex justify-between mb-0 p-2">
                                        <dt className="mb-0 opacity-75 text-xs">More than 1 million</dt>
                                        <dd className="mb-0 font-bold text-xs">Even cheaper</dd>
                                    </dl>
                                </div>

                                <div className="flex justify-between items-baseline">
                                    <div className="text-base mb-0 text-base font-bold">Monthly minimum price</div>
                                    <div className="mb-0 flex items-baseline">
                                        <div className="text-base">$2,000</div> {/* price value from slider */}
                                        <div className="opacity-50">/mo</div>
                                    </div>
                                </div>

                                <hr className="border-white border-solid border-opacity-20 border-r-0 border-b-0 border-left-0 mb-2" />

                                <div className="flex justify-between items-baseline">
                                    <div className="text-base mb-0 text-base font-bold">Estimated price</div>
                                    <div className="mb-0 font-bold flex items-baseline">
                                        <div className="text-base">$2,000</div> {/* price value from slider */}
                                        <div className="opacity-50">/mo</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Structure.Section>
    )
}
