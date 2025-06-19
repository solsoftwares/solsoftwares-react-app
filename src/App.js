// Please paste your complete React code here.
import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Bot,
  Mail,
  Filter,
  Calendar,
  PenTool,
  TrendingUp,
  Globe,
  MessageSquare,
  Download,
  LockKeyhole,
  Trash,
  GitBranch,
  UserCog,
  Network,
  Activity,
  Key,
  Mic,
  DollarSign,
  Users,
  Menu, // For mobile hamburger menu
  X, // For mobile close icon
  Settings, // For n8n section icon - REMOVED
  CheckCircle, // For success message
  AlertTriangle, // For error message
} from "lucide-react";

// Helper for smooth scrolling
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Custom SVG components - UPDATED WITH NEW SVGS
const HubSpotLogo = ({ className }) => (
  <svg className={className} version="1.1" id="svg855" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77.8 46.9">
    <style type="text/css">
      {`.st0{fill:#F62B54;}.st1{fill:#FFCC00;}.st2{fill:#00CA72;}`}
    </style>
    <g id="g853" transform="matrix(3.6956523,0,0,3.6956523,-3.7266276e-4,-19.226192)">
      <g id="g847" transform="translate(0,5.552)">
        <path id="path841" className="st0" d="M2.6,12.3c-0.9,0-1.8-0.5-2.3-1.3c-0.5-0.8-0.4-1.8,0.1-2.6
           l4.7-7.4c0.5-0.8,1.4-1.3,2.3-1.3c0.9,0,1.8,0.6,2.3,1.4c0.4,0.8,0.4,1.8-0.1,2.6l-4.7,7.4C4.4,11.8,3.5,12.3,2.6,12.3z">
        </path>
        <path id="path843" className="st1" d="M10.7,12.3c-1,0-1.8-0.5-2.3-1.3C8,10.1,8,9.1,8.5,8.3
           l4.7-7.4c0.5-0.8,1.4-1.3,2.3-1.3c1,0,1.8,0.6,2.3,1.4c0.4,0.8,0.4,1.8-0.2,2.6l-4.7,7.4C12.4,11.8,11.6,12.3,10.7,12.3z">
        </path>
        <ellipse id="ellipse845" className="st2" cx="18.6" cy="10" rx="2.4" ry="2.4">
        </ellipse>
      </g>
    </g>
  </svg>
);

const ZohoCRMLogo = ({ className }) => (
  <svg className={className} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.9 62.6">
    <style type="text/css">
      {/* Corrected to use #FFFFFF as per original SVG definition for Zoho CRM logo */}
      {`.st0{fill:#FFFFFF;}.st1{fill-rule:evenodd;clip-rule:evenodd;}`}
    </style>
    <g>
      <g>
        <path className="st0" d="M3.8,2.7l34.6-2.6c4.2-0.4,5.3-0.1,8,1.8l11.1,7.8c1.8,1.3,2.4,1.7,2.4,3.2v42.7c0,2.7-1,4.3-4.4,4.5
           l-40.2,2.4c-2.6,0.1-3.8-0.2-5.1-1.9L2.1,50.1c-1.5-2-2.1-3.4-2.1-5.1V7C0,4.8,1,2.9,3.8,2.7L3.8,2.7z M3.8,2.7">
        </path>
        <path className="st1" d="M38.4,0.1L3.8,2.7C1,2.9,0,4.8,0,7v38c0,1.7,0.6,3.2,2.1,5.1l8.1,10.6c1.3,1.7,2.6,2.1,5.1,1.9l40.2-2.4
           c3.4-0.2,4.4-1.8,4.4-4.5V12.9c0-1.4-0.5-1.8-2.2-3c-0.1-0.1-0.2-0.1-0.3-0.2L46.4,2C43.8,0,42.7-0.2,38.4,0.1L38.4,0.1z
            M16.2,12.2c-3.3,0.2-4,0.3-5.9-1.3L5.6,7.2C5.1,6.7,5.3,6.1,6.6,6l33.3-2.4c2.8-0.2,4.2,0.7,5.3,1.6l5.7,4.1
           c0.3,0.1,0.9,0.8,0.1,0.8l-34.4,2.1L16.2,12.2z M12.4,55.3V19c0-1.6,0.5-2.3,1.9-2.4l39.5-2.3c1.3-0.1,1.9,0.7,1.9,2.3v36
           c0,1.6-0.3,2.9-2.4,3l-37.8,2.2C13.4,58,12.4,57.2,12.4,55.3L12.4,55.3z M49.7,21c0.2,1.1,0,2.2-1.1,2.3l-1.8,0.4v26.8
           c-1.6,0.9-3,1.3-4.2,1.3c-1.9,0-2.4-0.6-3.9-2.4L26.7,30.6v18.1l3.8,0.9c0,0,0,2.2-3,2.2l-8.4,0.5c-0.2-0.5,0-1.7,0.8-1.9l2.2-0.6
           v-24l-3-0.3c-0.2-1.1,0.4-2.7,2.1-2.8l9-0.6l12.4,19V24.3l-3.2-0.4c-0.2-1.3,0.7-2.3,1.9-2.4L49.7,21z M49.7,21">
        </path>
      </g>
    </g>
  </svg>
);

const TrelloLogo = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="7.056000232696533 3 37.35095977783203 45">
    <g clipPath="url(#a)">
      <path fill="#002991" d="M38.914 13.35c0 5.574-5.144 12.15-12.927 12.15H18.49l-.368 2.322L16.373 39H7.056l5.605-36h15.095c5.083 0 9.082 2.833 10.555 6.77a9.687 9.687 0 0 1 .603 3.58z"></path>
      <path fill="#60CDFF" d="M44.284 23.7A12.894 12.894 0 0 1 31.53 34.5h-5.206L24.157 48H14.89l1.483-9 1.75-11.178.367-2.322h7.497c7.773 0 12.927-6.576 12.927-12.15 3.825 1.974 6.055 5.963 5.37 10.35z"></path>
      <path fill="#008CFF" d="M38.914 13.35C37.31 12.511 35.365 12 33.248 12h-12.64L18.49 25.5h7.497c7.773 0 12.927-6.576 12.927-12.15z"></path>
    </g>
  </svg>
);

const PaypalLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 31 35" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.814 34.382l-.078-29.99c-.202-.202-.596-.141-.75-.096l-1.026.318a7.172 7.172 0 00-.491-1.208c-.728-1.39-1.792-2.125-3.08-2.127h-.004c-.086 0-.171.008-.257.015l-.01.001a2.805 2.805 0 00-.116-.134c-.56-.6-1.28-.893-2.142-.868-1.662.048-3.317 1.25-4.66 3.385-.945 1.503-1.662 3.39-1.867 4.851L4.06 9.544c-.963.303-.993.333-1.12 1.242-.095.688-2.616 20.207-2.616 20.207l21.128 3.658.362-.27zM14.892 1.664c-.281-.185-.61-.271-1-.263-2.566.074-4.804 4.087-5.375 6.761l2.458-.762.439-.136c.322-1.698 1.13-3.46 2.187-4.594a4.823 4.823 0 011.29-1.006zm-2.263 5.223l3.528-1.094c.011-.92-.089-2.28-.549-3.24-.49.202-.902.556-1.198.873-.793.853-1.44 2.154-1.78 3.461zm4.633-1.436l1.64-.509c-.262-.852-.884-2.28-2.145-2.52.392 1.013.493 2.186.505 3.029z" fill="#95BF47" fillRule="evenodd"></path>
    <path d="M26.548 6.623c-.126-.01-2.568-.048-2.568-.048s-2.043-1.986-2.245-2.189a.503.503 0 00-.283-.13v30.39l9.155-2.279s-3.736-25.291-3.76-25.464a.333.333 0 00-.3-.28z" fill="#5E8E3E"></path>
    <path d="M16.378 11.342l-1.064 3.984s-1.186-.541-2.593-.452c-2.062.13-2.084 1.433-2.063 1.76.112 1.78 4.793 2.17 5.056 6.343.207 3.283-1.739 5.53-4.543 5.706-3.365.213-5.218-1.775-5.218-1.775l.713-3.038s1.865 1.409 3.357 1.314c.976-.061 1.324-.855 1.289-1.417-.147-2.323-3.959-2.187-4.2-6.005-.202-3.215 1.905-6.47 6.556-6.764 1.792-.114 2.71.345 2.71.345" fill="#fff"></path>
  </svg>
);

const GitHubLogo = ({ className }) => (
  <svg className={className} width="98" height="96" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96">
    <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#FFFFFF"></path> {/* Changed fill color to white */}
  </svg>
);

const TelegramLogo = ({ className }) => (
  <svg className={className} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128.3 128.3">
    <style type="text/css">
      {`.st0{fill-rule:evenodd;clip-rule:evenodd;fill:url(#Oval_1_);}.st1{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}`}
    </style>
    <g>
      <g id="Artboard">
        <linearGradient id="Oval_1_" gradientUnits="userSpaceOnUse" x1="0" y1="64.1535" x2="128.3071" y2="64.1535">
          <stop offset="0" style={{ stopColor: '#2AABEE' }}></stop>
          <stop offset="1" style={{ stopColor: '#229ED9' }}></stop>
        </linearGradient>
        <circle id="Oval" className="st0" cx="64.2" cy="64.2" r="64.2"></circle>
        <path id="Path-3" className="st1" d="M29,63.5C47.7,55.3,60.2,50,66.5,47.4C84.3,40,88,38.7,90.4,38.6c0.5,0,1.7,0.1,2.5,0.7
           c0.6,0.5,0.8,1.2,0.9,1.7s0.2,1.6,0.1,2.5c-1,10.1-5.1,34.8-7.3,46.1c-0.9,4.8-2.7,6.4-4.4,6.6c-3.7,0.3-6.6-2.5-10.2-4.8
           c-5.6-3.7-8.8-6-14.3-9.6c-6.3-4.2-2.2-6.5,1.4-10.2c0.9-1,17.4-15.9,17.7-17.3c0-0.2,0.1-0.8-0.3-1.1c-0.4-0.3-0.9-0.2-1.3-0.1
           c-0.6,0.1-9.6,6.1-27.1,17.9c-2.6,1.8-4.9,2.6-7,2.6c-2.3,0-6.7-1.3-10-2.4c-4-1.3-7.2-2-6.9-4.2C24.4,65.9,26,64.7,29,63.5z">
        </path>
      </g>
    </g>
  </svg>
);

const LinkedInLogo = ({ className }) => (
  <svg className={className} id="Group_1282" xmlns="http://www.w3.org/2000/svg" width="76.624" height="65.326" viewBox="0 0 76.624 65.326">
    <path id="Path_2525" d="M1165,274.515a1.2,1.2,0,0,0,1.21-1.269c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025,1.291,2.029h.724l-1.389-2.1Zm-.783-.472h-.785V272.45h.995c.514,0,1.1.084,1.1.757,0,.774-.593.836-1.314.836" transform="translate(-1092.136 -213.406)" fill="#0a66c2"></path>
    <path id="Path_2520" d="M958.98,112.559h-9.6V97.525c0-3.585-.064-8.2-4.993-8.2-5,0-5.765,3.906-5.765,7.939v15.294h-9.6V81.642h9.216v4.225h.129a10.1,10.1,0,0,1,9.093-4.994c9.73,0,11.524,6.4,11.524,14.726ZM918.19,77.416a5.571,5.571,0,1,1,5.57-5.572,5.571,5.571,0,0,1-5.57,5.572m4.8,35.143h-9.61V81.642h9.61Zm40.776-55.2h-55.21a4.728,4.728,0,0,0-4.781,4.67v55.439a4.731,4.731,0,0,0,4.781,4.675h55.21a4.741,4.741,0,0,0,4.8-4.675V62.025a4.738,4.738,0,0,0-4.8-4.67" transform="translate(-903.776 -57.355)" fill="#0a66c2"></path>
    <path id="Path_2526" d="M1156.525,264.22a4.418,4.418,0,1,0,.085,0h-.085m0,8.33a3.874,3.874,0,1,1,3.809-3.938c0,.022,0,.043,0,.065a3.791,3.791,0,0,1-3.708,3.871h-.1" transform="translate(-1084.362 -207.809)" fill="#0a66c2"></path>
  </svg>
);

const InstagramLogo = ({ className }) => (
  <svg className={className} width="534" height="534" viewBox="0 0 534 534" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M441.028 124.329C441.028 106.604 426.662 92.2913 409.003 92.2913C391.343 92.2913 376.965 106.604 376.965 124.329C376.965 141.989 391.343 156.301 409.003 156.301C426.662 156.301 441.028 141.989 441.028 124.329Z" fill="url(#paint0_linear_666_5)"/>
    <path d="M483.701 374.409C482.515 400.412 478.166 414.539 474.556 423.922C469.705 436.363 463.92 445.259 454.537 454.589C445.259 463.92 436.363 469.692 423.922 474.489C414.539 478.153 400.359 482.515 374.357 483.754C346.247 484.993 337.918 485.257 266.634 485.257C195.416 485.257 187.02 484.993 158.910 483.754C132.909 482.515 118.794 478.153 109.410 474.489C96.9037 469.692 88.0743 463.920 78.7437 78.7295C69.3469 445.259 63.5617 436.363 58.7778 423.922C55.1661 414.539 50.7519 400.412 49.6310 374.409C48.2611 346.299 48.0101 337.838 48.0101 266.699C48.0101 195.415 48.2611 187.020 49.6310 158.909C50.7519 132.908 55.1661 118.794 58.7778 109.331C63.5617 96.9034 69.3469 88.0601 78.7437 78.7295C88.0743 69.4128 96.9037 63.6266 109.410 58.7775C118.794 55.1006 132.909 50.8040 158.910 49.5655C187.020 48.3260 195.416 48.0097 266.634 48.0097C337.918 48.0097 346.247 48.3260 374.357 49.5655C400.359 50.8040 414.539 55.1006 423.922 58.7775C436.363 63.6266 445.259 69.4128 454.537 78.7295C463.920 88.0601 469.705 96.9034 474.556 109.331C478.166 118.794 482.515 132.908 483.701 158.909C485.006 187.020 485.322 195.415 485.322 266.699C485.322 337.838 485.006 346.299 483.701 374.409ZM531.712 156.722C530.408 128.308 525.926 108.896 519.271 91.988C512.498 74.4467 503.417 59.5810 488.551 44.7153C473.752 29.9159 458.886 20.8354 441.345 13.9827C424.371 7.39299 405.024 2.85913 376.597 1.62066C348.170 0.249731 339.091 -0.000351726 266.634 -0.000351726C194.242 -0.000351726 185.097 0.249731 156.670 1.62066C128.309 2.85913 108.975 7.39299 91.9222 13.9827C74.4471 20.8354 59.5814 29.9159 44.7819 44.7153C29.9162 59.5810 20.8357 74.4467 13.9959 91.988C7.40616 108.896 2.92569 128.308 1.55477 156.722C0.316291 185.149 0 194.242 0 266.699C0 339.091 0.316291 348.170 1.55477 376.597C2.92569 404.958 7.40616 424.357 13.9959 441.345C20.8357 458.820 29.9162 473.752 44.7819 488.551C59.5814 503.351 74.4471 512.497 91.9222 519.337C108.975 525.926 128.309 530.407 156.670 531.712C185.097 533.017 194.242 533.333 266.634 533.333C339.091 533.333 348.170 533.017 376.597 531.712C405.024 530.407 424.371 525.926 441.345 519.337C458.886 512.497 473.752 503.351 488.551 488.551C503.417 473.752 512.498 458.820 519.271 441.345C525.926 424.357 530.408 404.958 531.712 376.597C533.017 348.170 533.333 339.091 533.333 266.699C533.333 194.242 533.017 185.149 531.712 156.722Z" fill="url(#paint1_linear_666_5)"/>
    <path d="M266.634 355.512C217.569 355.512 177.756 315.764 177.756 266.699C177.756 217.555 217.569 177.756 266.634 177.756C315.713 177.756 355.578 217.555 355.578 266.699C355.578 315.764 315.713 355.512 266.634 355.512ZM266.634 129.68C191.001 129.68 129.746 191.066 129.746 266.699C129.746 342.267 191.001 403.588 266.634 403.588C342.267 403.588 403.588 342.267 403.588 266.699C403.588 191.066 342.267 129.680 266.634 129.68Z" fill="url(#paint2_linear_666_5)"/>
    <defs>
      <linearGradient id="paint0_linear_666_5" x1="4.80935" y1="527.819" x2="488.911" y2="43.7191" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFD521"/>
        <stop offset="0.05" stopColor="#FFD521"/>
        <stop offset="0.501119" stopColor="#F50000"/>
        <stop offset="0.95" stopColor="#B900B4"/>
        <stop offset="0.950079" stopColor="#B900B4"/>
        <stop offset="1" stopColor="#B900B4"/>
      </linearGradient>
      <linearGradient id="paint1_linear_666_5" x1="4.81059" y1="528.483" x2="489.310" y2="43.984" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFD521"/>
        <stop offset="0.05" stopColor="#FFD521"/>
        <stop offset="0.501119" stopColor="#F50000"/>
        <stop offset="0.95" stopColor="#B900B4"/>
        <stop offset="0.950079" stopColor="#B900B4"/>
        <stop offset="1" stopColor="#B900B4"/>
      </linearGradient>
      <linearGradient id="paint2_linear_666_5" x1="4.93664" y1="528.496" x2="489.319" y2="44.1138" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFD521"/>
        <stop offset="0.05" stopColor="#FFD521"/>
        <stop offset="0.501119" stopColor="#F50000"/>
        <stop offset="0.95" stopColor="#B900B4"/>
        <stop offset="0.950079" stopColor="#B900B4"/>
        <stop offset="1" stopColor="#B900B4"/>
      </linearGradient>
    </defs>
  </svg>
);

const WhatsAppLogo = ({ className }) => (
  <svg className={className} version="1.1" id="WhatsApp_Logo_Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 584 584">
    <style type="text/css">
      {`.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}`}
    </style>
    <g id="Icon_Shape">
      <defs>
        <path id="SVGID_1_" d="M584,435.8c0,3.2-0.1,10.1-0.3,15.5c-0.5,13.1-1.5,30-3.1,37.7c-2.4,11.6-5.9,22.5-10.6,31.6
            c-5.5,10.8-12.5,20.4-20.9,28.7c-8.3,8.3-17.9,15.3-28.7,20.8c-9.1,4.7-20.1,8.2-31.8,10.6c-7.6,1.5-24.4,2.6-37.4,3
            c-5.4,0.2-12.3,0.3-15.5,0.3l-287.6,0c-3.2,0-10.1-0.1-15.5-0.3c-13.1-0.5-30-1.5-37.7-3.1c-11.6-2.4-22.5-5.9-31.6-10.6
            c-10.8-5.5-20.4-12.5-28.7-20.9c-8.3-8.3-15.3-17.9-20.8-28.7c-4.7-9.1-8.2-20.1-10.6-31.8c-1.5-7.6-2.6-24.4-3-37.4
            C0.1,445.9,0,439,0,435.8l0-287.6c0-3.2,0.1-10.1,0.3-15.5c0.5-13.1,1.5-30,3.1-37.7C5.8,83.4,9.3,72.5,14,63.4
            C19.5,52.6,26.5,43,34.8,34.7c8.3-8.3,17.9-15.3,28.7-20.8c9.1-4.7,20.1-8.2,31.8-10.6c7.6-1.5,24.4-2.6,37.4-3
            c5.4-0.2,12.3-0.3,15.5-0.3l287.6,0c3.2,0,10.1,0.1,15.5,0.3c13.1,0.5,30,1.5,37.7,3.1c11.6,2.4,22.5,5.9,31.6,10.6
            c10.8,5.5,20.4,12.5,28.7,20.9c8.3,8.3,15.3,17.9,20.8,28.7c4.7-9.1,8.2-20.1,10.6-31.8c1.5-7.6,2.6-24.4,3-37.4
            c0.2,5.4,0.3,12.3,0.3,15.5L584,435.8z">
        </path>
      </defs>
      <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="292.0222" y1="584.0447" x2="292.0222" y2="-9.094947e-13">
        <stop offset="0" style={{ stopColor: '#25CF43' }}></stop>
        <stop offset="1" style={{ stopColor: '#61FD7D' }}></stop>
      </linearGradient>
      <use href="#SVGID_1_" style={{ overflow: 'visible', fillRule: 'evenodd', clipRule: 'evenodd', fill: 'url(#SVGID_2_)' }}></use>
      <clipPath id="SVGID_3_">
        <use xlinkHref="#SVGID_1_" style={{ overflow: 'visible' }}></use>
      </clipPath>
    </g>
    <g id="WA_Logo">
      <g>
        <path className="st0" d="M445.6,139.8c-39.3-39.3-91.6-61-147.3-61c-114.8,0-208.1,93.4-208.2,208.1c0,36.7,9.6,72.5,27.8,104
            L88.4,498.8l110.4-28.9c30.4,16.6,64.6,25.3,99.5,25.3h0.1c0,0,0,0,0,0c114.7,0,208.1-93.4,208.2-208.1
            C506.6,231.4,484.9,179.1,445.6,139.8z M298.4,460L298.4,460c-31.1,0-61.6-8.4-88.1-24.1l-6.3-3.7l-65.5,17.2l17.5-63.8l-4.1-6.5
            c-17.3-27.5-26.5-59.4-26.5-92.1c0-95.4,77.7-173,173.1-173c46.2,0,89.7,18,122.3,50.7c32.7,32.7,50.7,76.2,50.6,122.4
            C471.3,382.4,393.7,460,298.4,460z M393.3,330.5c-5.2-2.6-30.8-15.2-35.5-16.9c-4.8-1.7-8.2-2.6-11.7,2.6
            c-3.5,5.2-13.4,16.9-16.5,20.4c-3,3.5-6.1,3.9-11.3,1.3c-5.2-2.6-22-8.1-41.8-25.8c-15.5-13.8-25.9-30.8-28.9-36s-0.3-8,2.3-10.6
            c2.3-2.3,5.2-6.1,7.8-9.1c2.6-3,3.5-5.2,5.2-8.7c1.7-3.5,0.9-6.5-0.4-9.1c-1.3-2.6-11.7-28.2-16-38.6c-4.2-10.1-8.5-8.8-11.7-8.9
            c-3-0.2-6.5-0.2-10-0.2c-3.5,0-9.1,1.3-13.9,6.5c-4.8,5.2-18.2,17.8-18.2,43.4c0,25.6,18.6,50.3,21.2,53.8
            c2.6,3.5,36.7,56,88.9,78.5c12.4,5.4,22.1,8.6,29.7,11c12.5,4,23.8,3.4,32.8,2.1c10-1.5,30.8-12.6,35.1-24.7
            c4.3-12.1,4.3-22.6,3-24.7C401.9,334.4,398.5,333.1,393.3,330.5z">
        </path>
      </g>
    </g>
  </svg>
);

const MailchimpLogo = ({ className }) => (
  <svg className={className} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 40">
    <style type="text/css">
      {`.st0{fill:#41A5EE;}.st1{fill:#2B7CD3;}.st2{fill:#185ABD;}.st3{fill:#103F91;}.st4{opacity:0.1;enable-background:new    ;}.st5{opacity:0.2;enable-background:new    ;}.st6{fill:url(#SVGID_1_);}.st7{fill:#FFFFFF;}`}
    </style>
    <g>
      <path className="st0" d="M41.2,0H11.8c-1,0-1.8,0.8-1.8,1.8c0,0,0,0,0,0V10l17,5l16-5V1.8C43,0.8,42.2,0,41.2,0L41.2,0z"></path>
      <path className="st1" d="M43,10H10v10l17,3l16-3V10z"></path>
      <path className="st2" d="M10,20v10l16,2l17-2V20H10z"></path>
      <path className="st3" d="M11.8,40h29.3c1,0,1.8-0.8,1.8-1.8l0,0V30H10v8.2C10,39.2,10.8,40,11.8,40L11.8,40z"></path>
      <path className="st4" d="M22.2,8H10v25h12.2c1,0,1.8-0.8,1.8-1.8V9.8C24,8.8,23.2,8,22.2,8z"></path>
      <path className="st5" d="M21.2,9H10v25h11.2c1,0,1.8-0.8,1.8-1.8V10.8C23,9.8,22.2,9,21.2,9z"></path>
      <path className="st5" d="M21.2,9H10v23h11.2c1,0,1.8-0.8,1.8-1.8V10.8C23,9.8,22.2,9,21.2,9z"></path>
      <path className="st5" d="M20.2,9H10v23h10.2c1,0,1.8-0.8,1.8-1.8V10.8C22,9.8,21.2,9,20.2,9z"></path>
      <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="3.8218" y1="34.4323" x2="18.1782" y2="9.5677" gradientTransform="matrix(1 0 0 -1 0 42)">
        <stop offset="0" style={{ stopColor: '#2368C4' }}></stop>
        <stop offset="0.5" style={{ stopColor: '#1A5DBE' }}></stop>
        <stop offset="1" style={{ stopColor: '#1146AC' }}></stop>
      </linearGradient>
      <path className="st6" d="M1.8,9h18.3c1,0,1.8,0.8,1.8,1.8v18.3c0,1-0.8,1.8-1.8,1.8H1.8c-1,0-1.8-0.8-1.8-1.8V10.8C0,9.8,0.8,9,1.8,9z"></path>
      <path className="st7" d="M7.5,23.1c0,0.3,0.1,0.5,0.1,0.7h0c0-0.2,0-0.4,0.1-0.7c0.1-0.3,0.1-0.5,0.1-0.7L9.8,14h2.5l2,8.2
        c0.1,0.5,0.2,1,0.2,1.5h0c0-0.5,0.1-1,0.2-1.5l1.6-8.2h2.3L15.8,26h-2.7l-1.9-7.9c-0.1-0.2-0.1-0.5-0.2-0.9S11,16.5,11,16.4h0
        c0,0.2-0.1,0.5-0.1,0.9s-0.1,0.7-0.2,0.8L8.9,26H6.2L3.4,14h2.3l1.7,8.3C7.4,22.5,7.5,22.8,7.5,23.1z"></path>
    </g>
  </svg>
);

const GoogleSheetsLogo = ({ className }) => (
  <svg className={className} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.6 56">
    <style type="text/css">
      {`.st0{fill:#4285F4;}.st1{fill:#34A853;}.st2{fill:#FBBC04;}.st3{fill:#EA4335;}.st4{fill:#C5221F;}`}
    </style>
    <g>
      <g>
        <path className="st0" d="M5.1,56H17V27.2L0,14.4v36.5C0,53.7,2.3,56,5.1,56"></path>
        <path className="st1" d="M57.7,56h11.9c2.8,0,5.1-2.3,5.1-5.1V14.4l-17,12.7"></path>
        <path className="st2" d="M57.7,5.1v22.1l17-12.7V7.6c0-6.3-7.2-9.9-12.2-6.1"></path>
        <path className="st3" d="M17,27.2V5.1l20.4,15.3L57.7,5.1v22.1L37.3,42.4"></path>
        <path className="st4" d="M0,7.6v6.8l17,12.7V5.1l-4.8-3.6C7.2-2.2,0,1.4,0,7.6"></path>
      </g>
    </g>
  </svg>
);

const DropboxLogo = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" height="800" width="1200" id="svg126" version="1.1" viewBox="-35.3175 -50 306.085 300">
    <defs id="defs112">
      <style>
        {`.cls-1{fill:#0061ff}`}
      </style>
    </defs>
    <path id="polygon116" className="cls-1" d="M58.86 75l58.87-37.5L58.86 0 0 37.5z"></path>
    <path id="polygon118" className="cls-1" d="M176.59 75l58.86-37.5L176.59 0l-58.86 37.5z"></path>
    <path id="polygon120" className="cls-1" d="M117.73 112.5L58.86 75 0 112.5 58.86 150z"></path>
    <path id="polygon122" className="cls-1" d="M176.59 150l58.86-37.5L176.59 75l-58.86 37.5z"></path>
    <path id="polygon124" className="cls-1" d="M176.59 162.5L117.73 125l-58.87 37.5 58.87 37.5z"></path>
  </svg>
);

const NotionLogo = ({ className }) => (
  <svg className={className} width="721" height="721" viewBox="0 0 721 721" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1637_2934)">
      <g clipPath="url(#clip1_1637_2934)">
        <path d="M304.246 294.611V249.028C304.246 245.189 305.687 242.309 309.044 240.392L400.692 187.612C413.167 180.415 428.042 177.058 443.394 177.058C500.971 177.058 537.44 221.682 537.44 269.182C537.44 272.54 537.44 276.379 536.959 280.218L441.954 224.558C436.197 221.201 430.437 221.201 424.68 224.558L304.246 294.611ZM518.245 472.145V363.224C518.245 356.505 515.364 351.707 509.608 348.349L389.174 278.296L428.519 255.743C431.877 253.826 434.757 253.826 438.115 255.743L529.762 308.523C556.154 323.879 573.905 356.505 573.905 388.171C573.905 424.636 552.315 458.225 518.245 472.141V472.145ZM275.937 376.182L236.592 353.152C233.235 351.235 231.794 348.354 231.794 344.515V238.956C231.794 187.617 271.139 148.749 324.4 148.749C344.555 148.749 363.264 155.468 379.102 167.463L284.578 222.164C278.822 225.521 275.942 230.319 275.942 237.039V376.186L275.937 376.182ZM360.626 425.122L304.246 393.455V326.283L360.626 294.616L417.002 326.283V393.455L360.626 425.122ZM396.852 570.989C376.698 570.989 357.989 564.27 342.151 552.276L436.674 497.574C442.431 494.217 445.311 489.419 445.311 482.699V343.552L485.138 366.582C488.495 368.499 489.936 371.379 489.936 375.219V480.778C489.936 532.117 450.109 570.985 396.852 570.985V570.989ZM283.134 463.99L191.486 411.211C165.094 395.854 147.343 363.229 147.343 331.562C147.343 294.616 169.415 261.509 203.48 247.593V356.991C203.48 363.71 206.361 368.508 212.117 371.866L332.074 441.437L292.729 463.99C289.372 465.907 286.491 465.907 283.134 463.99ZM277.859 542.68C223.639 542.68 183.813 501.895 183.813 451.514C183.813 447.675 184.294 443.836 184.771 439.997L279.295 494.698C285.051 498.056 290.812 498.056 296.568 494.698L417.002 425.127V470.71C417.002 474.549 415.562 477.429 412.204 479.346L320.557 532.126C308.081 539.323 293.206 542.680 277.854 542.68H277.859ZM396.852 599.776C454.911 599.776 503.370 558.513 514.410 503.812C568.149 489.896 602.696 439.515 602.696 388.176C602.696 354.587 588.303 321.962 562.392 298.45C564.791 288.373 566.231 278.296 566.231 268.224C566.231 199.611 510.571 148.267 446.274 148.267C433.322 148.267 420.846 150.184 408.370 154.505C386.775 133.392 357.026 119.958 324.400 119.958C266.342 119.958 217.883 161.220 206.843 215.921C153.104 229.837 118.557 280.218 118.557 331.557C118.557 365.146 132.950 397.771 158.861 421.283C156.462 431.360 155.022 441.437 155.022 451.510C155.022 520.123 210.682 571.466 274.978 571.466C287.931 571.466 300.407 569.549 312.883 565.228C334.473 586.341 364.222 599.776 396.852 599.776Z" fill="black"/>
      </g>
    </g>
    <defs>
      <clipPath id="clip0_1637_2934">
        <rect width="720" height="720" fill="white" transform="translate(0.606934 0.0999756)"/>
      </clipPath>
      <clipPath id="clip1_1637_2934">
        <rect width="484.139" height="479.818" fill="white" transform="translate(118.557 119.958)"/>
      </clipPath>
    </defs>
  </svg>
);

const FigmaLogo = ({ className }) => (
  <svg className={className} width="288" height="432" viewBox="0 0 288 432" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="95.0226" height="142.534" fill="black" fillOpacity="0" transform="translate(1.46603 2.19946) scale(3)"/>
    <path d="M144 216C144 176.641 175.907 144.733 215.267 144.733V144.733C254.626 144.733 286.534 176.641 286.534 216V216C286.534 255.36 254.626 287.267 215.267 287.267V287.267C175.907 287.267 144 255.36 144 216V216Z" fill="#1ABCFE"/>
    <path d="M1.46603 358.534C1.46603 319.175 33.3733 287.267 72.733 287.267H144V358.534C144 397.894 112.093 429.801 72.733 429.801V429.801C33.3733 429.801 1.46603 397.894 1.46603 358.534V358.534Z" fill="#0ACF83"/>
    <path d="M144 2.19946V144.733H215.267C254.627 144.733 286.534 112.826 286.534 73.4664V73.4664C286.534 34.1068 254.627 2.19946 215.267 2.19946L144 2.19946Z" fill="#FF7262"/>
    <path d="M1.46603 73.4664C1.46603 112.826 33.3733 144.733 72.733 144.733L144 144.733L144 2.19941L72.733 2.19941C33.3733 2.19941 1.46603 34.1067 1.46603 73.4664V73.4664Z" fill="#F24E1E"/>
    <path d="M1.46603 216C1.46603 255.36 33.3733 287.267 72.733 287.267H144L144 144.733L72.733 144.733C33.3733 144.733 1.46603 176.641 1.46603 216V216Z" fill="#A259FF"/>
  </svg>
);

const ShopifyLogo = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 525.8 535.73">
    <defs>
      <style>
        {`.cls-1{fill:none;}.cls-2{fill:#006bff;}.cls-3{fill:#0ae9ef;}`}
      </style>
    </defs>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Logo_assets" data-name="Logo assets">
        <g id="Brand_mark" data-name="Brand mark">
          <path className="cls-1" d="M443.74,337.62l-27.16,47.05a139.52,139.52,0,0,1-120.82,69.75H241.43a139.52,139.52,0,0,1-120.82-69.75L93.45,337.62a139.52,139.52,0,0,1,0-139.51l27.16-47.05A139.53,139.53,0,0,1,241.43,81.3h54.33a139.53,139.53,0,0,1,120.82,69.76l27.16,47.05a139.23,139.23,0,0,1,8.55,17.55c0,.12.09.23.13.35a102.15,102.15,0,0,0,44.33-18.24c0-.14-.08-.28-.13-.43a237.8,237.8,0,0,0-33.29-67.58,240.67,240.67,0,0,0-52-53.48A239.3,239.3,0,0,0,98.65,437.08a239.43,239.43,0,0,0,398-98.69c.05-.15.09-.29.13-.43a102.15,102.15,0,0,1-44.33-18.24c0,.12-.09.23-.13.35A139.23,139.23,0,0,1,443.74,337.62Z"></path>
          <path className="cls-2" d="M360.4,347.4c-17,15.09-38.21,33.87-76.78,33.87h-23c-27.88,0-53.23-10.12-71.37-28.49-17.72-17.94-27.48-42.5-27.48-69.16V252.11c0-26.66,9.76-51.22,27.48-69.16,18.14-18.37,43.49-28.49,71.37-28.49h23c38.57,0,59.76,18.78,76.78,33.87,17.65,15.65,32.9,29.16,73.52,29.16a116.05,116.05,0,0,0,18.5-1.48c0-.12-.08-.23-.13-.35a139.23,139.23,0,0,0-8.55-17.55l-27.16-47.05A139.53,139.53,0,0,0,295.76,81.3H241.43a139.53,139.53,0,0,0-120.82,69.76L93.45,198.11a139.52,139.52,0,0,0,0,139.51l27.16,47.05a139.52,139.52,0,0,0,120.82,69.75h54.33a139.52,139.52,0,0,0,120.82-69.75l27.16-47.05a139.23,139.23,0,0,0,8.55-17.55c0-.12.09-.23.13-.35a116.05,116.05,0,0,0-18.5-1.48C393.3,318.24,378.05,331.75,360.4,347.4Z"></path>
          <path className="cls-2" d="M283.62,183h-23c-42.42,0-70.3,30.3-70.3,69.09v31.51c0,38.79,27.88,69.09,70.3,69.09h23c61.82,0,57-63,150.3-63a144.19,144.19,0,0,1,26.37,2.41,139.36,139.36,0,0,0,0-48.46,143.32,143.32,0,0,1-26.37,2.42C340.59,246.05,345.44,183,283.62,183Z"></path>
          <path className="cls-3" d="M513.91,315.13a130.21,130.21,0,0,0-53.62-23c0,.16-.05.32-.08.47a138.46,138.46,0,0,1-7.79,27.16A102.15,102.15,0,0,1,496.75,338c0,.14-.08-.28-.13.43A237.8,237.8,0,0,1,463.33,406a240.67,240.67,0,0,1-52,53.48A239.3,239.3,0,0,1,98.65,98.65a239.43,239.43,0,0,1,398,98.69c.05.15.09.29.13.43A102.15,102.15,0,0,1,452.42,216a139.36,139.36,0,0,1,7.8,27.18c0,.15,0,.3.07.44a129.94,129.94,0,0,0,53.62-23c15.29-11.31,12.33-24.09,10-31.65C490.22,79.52,388.33,0,267.86,0C119.93,0,0,119.93,0,267.86S119.93,535.73,267.86,535.73c120.47,0,222.36-79.52,256-188.94C526.24,339.23,529.2,326.45,513.91,315.13Z"></path>
          <path className="cls-3" d="M452.42,216a116.05,116.05,0,0,1-18.5,1.48c-40.62,0-55.87-13.51-73.52-29.16-17-15.09-38.21-33.87-76.78-33.87h-23c-27.88,0-53.23,10.12-71.37-28.49-17.72-17.94-27.48-42.5-27.48-69.16v31.51c0,26.66,9.76,51.22,27.48,69.16,18.14,18.37,43.49,28.49,71.37,28.49h23c38.57,0,59.76-18.78,76.78-33.87,17.65-15.65,32.9-29.16,73.52-29.16a116.05,116.05,0,0,1,18.5,1.48,138.46,138.46,0,0,0,7.79-27.16c0-.15.06-.31.08-.47a144.19,144.19,0,0,0-26.37-2.41c-93.33,0-88.48,63-150.3,63h-23c-42.42,0-70.3-30.3-70.3-69.09V252.11c0-38.79,27.88-69.09,70.3-69.09h23c61.82,0,57,63,150.3,63a143.32,143.32,0,0,0,26.37-2.42c0-.14,0-.29-.07-.44A139.36,139.36,0,0,0,452.42,216Z"></path>
        </g>
      </g>
    </g>
  </svg>
);


const SlackLogo = ({ className }) => (
  <svg className={className} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 270">
    <style type="text/css">
      {`.st0{fill:#E01E5A;}.st1{fill:#36C5F0;}.st2{fill:#2EB67D;}.st3{fill:#ECB22E;}`}
    </style>
    <g>
      <g>
        <path className="st0" d="M99.4,151.2c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h12.9V151.2z"></path>
        <path className="st0" d="M105.9,151.2c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v32.3c0,7.1-5.8,12.9-12.9,12.9s-12.9-5.8-12.9-12.9V151.2z"></path>
      </g>
      <g>
        <path className="st1" d="M118.8,99.4c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v12.9H118.8z"></path>
        <path className="st1" d="M118.8,105.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9H86.5c-7.1,0-12.9-5.8-12.9-12.9s5.8-12.9,12.9-12.9H118.8z"></path>
      </g>
      <g>
        <path className="st2" d="M170.6,118.8c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9h-12.9V118.8z"></path>
        <path className="st2" d="M164.1,118.8c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9V86.5c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9V118.8z"></path>
      </g>
      <g>
        <path className="st3" d="M151.2,170.6c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9v-12.9H151.2z"></path>
        <path className="st3" d="M151.2,164.1c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h32.3c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9H151.2z"></path>
      </g>
    </g>
  </svg>
);


const GmailLogo = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <path fill="#EA4335" d="M44 24c0-1.8-.4-3.5-1.1-5.1L24 30.7 5.1 18.9C4.4 20.5 4 22.2 4 24c0 11 8.1 20.1 18.6 21.8L24 25.5l19.2 18.3C43.7 42.1 44 40.1 44 38.1z"/>
    <path fill="#C6362C" d="M44 14.1V38c0 1.6-.3 3.1-.7 4.5L24 25.5l19.2-18.3c.7 1.6 1.1 3.3 1.1 5.1z"/>
    <path fill="#FBC02D" d="M4 14.1V38c0 1.6.3 3.1.7 4.5L24 25.5 5.1 7.2C4.4 8.9 4 10.6 4 12.4z"/>
    <path fill="#4285F4" d="M24 0c-1.8 0-3.5.4-5.1 1.1L4 18.9 24 30.7 44 18.9 29.1 5.1C27.5 4.4 25.8 4 24 4c-11 0-20.1 8.1-21.8 18.6L24 22.5l-19.2 18.3C4.3 40.1 4 38.1 4 36.1z"/>
  </svg>
);


// Feature component for Security Section
function Feature({ icon, title, desc }) {
  return (
    <div className="bg-zinc-800 p-6 rounded-2xl shadow-xl border border-zinc-700 hover:border-teal-500 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-2xl flex flex-col items-start text-left">
      <div className="mb-3 text-teal-400">{icon}</div>
      <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
      <p className="text-zinc-300 text-base leading-relaxed">{desc}</p>
    </div>
  );
}

// Brand Logo Component
const SolSoftwaresLogo = ({ className, onClick }) => (
  <button
    onClick={onClick}
    className={`font-['Helvetica_Neue'] text-white text-3xl md:text-4xl font-medium tracking-tight
                  bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-400
                  ${className} focus:outline-none focus:ring-2 focus:ring-teal-400 rounded-lg p-1`} // Added focus styling
  >
    SolSoftwares
  </button>
);

// Navigation Bar Component
const NavBar = ({ activeSectionId, onMenuToggle }) => { // Added onMenuToggle prop
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Define navigation items with their labels and corresponding section IDs
  const navItems = [
    { label: "Home", id: "hero-section" },
    { label: "Our Vision", id: "our-vision-section" },
    { label: "AI Solutions", id: "ai-agents-section" },
    { label: "Why SolSoftwares", id: "why-solsoftwares-slider" },
    { label: "How It Works", id: "how-it-works-section" },
    { label: "Contact Us", id: "contact-section" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // More than 50px scrolled
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    onMenuToggle(isOpen); // Notify parent component (App) about menu state
  }, [isOpen, onMenuToggle]);

  const handleNavItemClick = (id) => {
    setIsOpen(false); // First, initiate closing the mobile menu
    // Add a small delay to allow the mobile menu animation to start
    setTimeout(() => {
      scrollToSection(id); // Then, scroll to the section
    }, 300); // This delay should match the CSS transition duration for mobile-menu overlay
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
                    ${isScrolled ? 'bg-zinc-950/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16"> {/* Fixed height for nav */}
        {/* Logo */}
        <SolSoftwaresLogo className="z-20" onClick={() => handleNavItemClick("hero-section")} />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavItemClick(item.id)}
              className={`text-lg font-medium relative group
                          ${activeSectionId === item.id ? 'text-teal-400 font-semibold' : 'text-zinc-300 hover:text-teal-400'}
                          transition-colors duration-200`}
            >
              {item.label}
              {/* Underline hover and active effect */}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-teal-400 transition-all duration-300
                                ${activeSectionId === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          ))}
        </div>

        {/* Mobile Hamburger/Close Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 p-2 rounded-md"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Scrim (Overlay Mask) */}
      <div
        className={`fixed inset-0 bg-black/70 z-30 transition-opacity duration-300 ease-in-out
                   ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsOpen(false)} // Click scrim to close
        aria-hidden={!isOpen} // Hide from screen readers when invisible
      ></div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-y-0 right-0 bg-zinc-950/95 backdrop-blur-lg z-40
                   w-full max-w-md flex flex-col items-center justify-center transition-transform duration-300 ease-in-out
                   ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Main Navigation Menu"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 p-2 rounded-md"
          aria-label="Close menu"
        >
          <X className="h-10 w-10" />
        </button>

        <SolSoftwaresLogo className="mb-12 text-4xl" onClick={() => handleNavItemClick("hero-section")} />
        <div className="flex flex-col gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavItemClick(item.id)}
              className={`py-3 px-8 rounded-full text-2xl font-bold transition-colors duration-200
                          ${activeSectionId === item.id ? 'bg-teal-500 text-zinc-950' : 'text-white hover:bg-zinc-800 hover:text-teal-400 border border-zinc-700'}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};


// Hero Section (redesigned)
const HeroSection = () => (
  <section
    id="hero-section"
    className="relative text-center py-24 md:py-32 px-6 bg-gradient-to-br from-zinc-950 to-black overflow-hidden
               flex flex-col items-center justify-center min-h-screen" // Ensure it takes full screen height
  >
    {/* Subtle animated background particles */}
    <div className="absolute inset-0 z-0 opacity-10">
      <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" fill="none">
        <defs>
          <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#00ffc8" stopOpacity="0.1" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="20" cy="80" r="15" fill="url(#grad1)" className="animate-pulse-slow duration-5000 delay-1000" />
        <circle cx="80" cy="20" r="10" fill="url(#grad1)" className="animate-pulse-slow duration-5000 delay-2000" />
        <circle cx="50" cy="50" r="20" fill="url(#grad1)" className="animate-pulse-slow duration-5000 delay-3000" />
        <circle cx="10" cy="10" r="12" fill="url(#grad1)" className="animate-pulse-slow duration-5000 delay-500" />
        <circle cx="90" cy="90" r="18" fill="url(#grad1)" className="animate-pulse-slow duration-5000 delay-2500" />
      </svg>
    </div>
    {/* Keyframe for slow pulse animation */}
    <style>{`
      @keyframes pulse-slow {
        0%, 100% { opacity: 0.1; transform: scale(1); }
        50% { opacity: 0.25; transform: scale(1.1); }
      }
      .animate-pulse-slow {
        animation: pulse-slow 7s infinite ease-in-out;
      }
    `}</style>

    <div className="relative z-10 flex flex-col items-center pt-20"> {/* Added pt-20 for header spacing */}
      <SolSoftwaresLogo className="mb-8 drop-shadow-md" onClick={() => scrollToSection("hero-section")} /> {/* Enhanced logo with shadow */}
      <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-2xl max-w-4xl">
        Transform Your Business with <span className="text-teal-400">Intelligent AI Automation</span>
      </h1>
      <p className="text-lg md:text-2xl text-zinc-300 mb-10 max-w-4xl leading-relaxed font-light">
        Unleash unparalleled efficiency, accelerate growth, and build exceptional customer experiences with bespoke AI solutions crafted for your enterprise.
      </p>
      <div className="flex flex-col sm:flex-row gap-5 mb-12">
        <button
          onClick={() => scrollToSection("contact-section")}
          className="inline-block bg-teal-500 text-zinc-950 font-extrabold px-10 py-4 rounded-full text-lg shadow-2xl hover:bg-teal-400 hover:scale-105 transition-all duration-300 ease-in-out transform border-2 border-teal-500 hover:border-teal-400 animate-bounce-subtle"
        >
          Book a Free Strategy Call
        </button>
        <button
          onClick={() => scrollToSection("how-it-works-section")} // Updated to how-it-works-section
          className="inline-block bg-transparent text-teal-400 font-semibold px-10 py-4 rounded-full text-lg shadow-xl hover:bg-zinc-800 hover:text-white transition-all duration-300 ease-in-out transform border-2 border-teal-400"
        >
          Understand Us
        </button>
      </div>
      {/* Trust signals */}
      <p className="text-zinc-400 text-sm mt-4">
        Trusted by innovative startups and established enterprises globally.
      </p>
    </div>
  </section>
);

// What We Do Section (Renamed and refined)
const OurVisionSection = () => (
  <section
    id="our-vision-section"
    className="px-6 py-20 bg-zinc-900 rounded-3xl shadow-2xl max-w-6xl mx-auto -mt-16 relative z-20 border border-zinc-800"
  >
    <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-6">Our Vision: Intelligence Empowering Growth</h2>
    <p className="text-zinc-300 text-center max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
      At SolSoftwares, we don't just build bots; we craft intelligent automation ecosystems designed to solve your toughest business challenges. Our bespoke AI solutions free your teams from repetitive tasks, boost operational agility, and unlock new avenues for revenue and innovation. Experience the future of work, today.
    </p>
  </section>
);

// New "What is n8n?" Section
const WhatIsN8nSection = () => (
  <section id="what-is-n8n-section" className="px-6 py-20 max-w-6xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What is <span className="text-teal-400">n8n</span>?</h2>
    <p className="text-zinc-300 text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
      At SolSoftwares, we build powerful automations using n8n, our core workflow automation platform. Think of n8n as the intelligent engine that connects all your different online tools and services, making them work together seamlessly.
    </p>
    <p className="text-zinc-300 text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
      It allows us to visually design automated processes simply by linking "nodes" that represent specific steps or applications. This means we can create custom solutions for you, like automatically sending welcome emails, syncing customer data across platforms, or handling repetitive tasks, all without writing complex code. It’s how we ensure your digital operations run smoothly, efficiently, and exactly as you need them to.
    </p>
  </section>
);


const sliderContent = [
  {
    title: "Instant Integration, Transparent Performance",
    content: (
      <>
        <p className="mb-4">
          SolSoftwares bots seamlessly plug into your existing workflows and customer journeys, requiring no complex code. Our intuitive platform ensures rapid deployment, getting you up and running in days, not months.
        </p>
        <p className="mb-4">
          Gain complete visibility with real-time dashboards and detailed audit logs. See exactly what your AI agents are doing, monitor performance, and ensure every interaction aligns with your strategic goals.
        </p>
      </>
    ),
    icon: <Sparkles className="h-16 w-16 text-teal-400 mx-auto mb-6" />,
  },
  {
    title: "Your Brand, Amplified: Personalized AI at Scale",
    content: (
      <>
        <p className="mb-4">
          Every business is unique, and so should its AI. We specialize in tailoring AI agents to precisely match your operational needs, brand voice, and customer expectations.
        </p>
        <p className="mb-4">
          From custom conversational styles and data models to seamless integration with your brand aesthetics, our solutions become a natural extension of your identity, fostering deeper trust and loyalty.
        </p>
      </>
    ),
    icon: <Users className="h-16 w-16 text-teal-400 mx-auto mb-6" />,
  },
  {
    title: "Security by Design: Your Data, Our Sacred Trust",
    content: (
      <>
        <p className="mb-4">
          Data privacy and security are non-negotiable. Our architecture is built with enterprise-grade security, featuring OAuth protocols, granular permissions, and end-to-end encryption.
        </p>
        <p className="mb-4">
          All client data is encrypted, processed with default no-retention policies for AI models, and remains fully visible and controllable by you. Your information never trains our models or leaves your defined workflows.
        </p>
      </>
    ),
    icon: <LockKeyhole className="h-16 w-16 text-teal-400 mx-auto mb-6" />,
  },
];

// Core Services Slider (Renamed to "Why SolSoftwares?" and refined)
const WhySolSoftwaresSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRefs = useRef([]);
  const intervalRef = useRef(null);
  const sliderContainerRef = useRef(null);

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000); // Auto-play every 7 seconds
  }, [slides.length]);

  const pauseAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const goToSlide = useCallback((index) => {
    pauseAutoPlay();
    setCurrentSlide(index);
    setTimeout(startAutoPlay, 10000); // Resume auto-play after 10 seconds of manual interaction
  }, [pauseAutoPlay, startAutoPlay]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, slides.length, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, slides.length, goToSlide]);

  useEffect(() => {
    startAutoPlay();
    const container = sliderContainerRef.current;
    if (container) {
      container.addEventListener('mouseenter', pauseAutoPlay);
      container.addEventListener('mouseleave', startAutoPlay);
    }
    return () => {
      pauseAutoPlay();
      if (container) {
        container.removeEventListener('mouseenter', pauseAutoPlay);
        container.removeEventListener('mouseleave', startAutoPlay);
      }
    };
  }, [startAutoPlay, pauseAutoPlay]);

  return (
    <section id="why-solsoftwares-slider" className="relative px-4 py-20 max-w-5xl mx-auto text-center overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Why Choose SolSoftwares?</h2>
      <div
        ref={sliderContainerRef}
        className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 ease-in-out border border-zinc-800"
      >
        <div className="flex transition-transform duration-700 ease-in-out"
             style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div
              key={index}
              ref={(el) => (slideRefs.current[index] = el)}
              className="flex-shrink-0 w-full bg-zinc-900 rounded-3xl p-8 md:p-12 box-border flex flex-col items-center justify-center text-center"
            >
              {slide.icon}
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">{slide.title}</h3>
              <div className="text-zinc-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                {slide.content}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 p-3 bg-teal-600 hover:bg-teal-500 rounded-full shadow-lg transition-all duration-300 ease-in-out group z-10 focus:outline-none focus:ring-2 focus:ring-teal-400"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-7 w-7 text-zinc-950 group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 bg-teal-600 hover:bg-teal-500 rounded-full shadow-lg transition-all duration-300 ease-in-out group z-10 focus:outline-none focus:ring-2 focus:ring-teal-400"
          aria-label="Next slide"
        >
          <ChevronRight className="h-7 w-7 text-zinc-950 group-hover:scale-110 transition-transform" />
        </button>
        
        {/* Dot navigation - Positioned inside the pb-16 space */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-teal-500 w-8' : 'bg-zinc-600 hover:bg-zinc-500'
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div> {/* End of slider container */}

      {/* Download Privacy Policy button - UPDATED to Google Docs link */}
      {currentSlide === 2 && (
        <a
          href="https://docs.google.com/document/d/1OiUjSmB2JpgERcXnCNR1kdh58-iAGtRxpJT8HuOg9B4/edit?usp=sharing"
          download="Solsoftwares_Privacy_Policy.pdf" // Still provides a suggested filename
          className="inline-flex items-center justify-center mt-8 bg-teal-400 text-zinc-950 font-extrabold px-8 py-3 rounded-full text-lg shadow-xl hover:bg-teal-300 hover:scale-105 transition-all duration-300 ease-in-out transform"
          target="_blank" // Opens in a new tab
          rel="noopener noreferrer"
        >
          <Download className="w-5 h-5 mr-2" /> View Privacy Policy
        </a>
      )}
    </section>
  );
};


// AI Agents Section (Renamed and enhanced with filtering)
const AIAgentsSection = () => {
  const allServices = [
    {
      icon: <Bot className="h-8 w-8 text-teal-400" />,
      title: "AI Receptionist",
      description: "Handles customer inquiries 24/7, books appointments, answers FAQs, and qualifies leads.",
      category: "Sales & Marketing",
    },
    {
      icon: <Mail className="h-8 w-8 text-teal-400" />,
      title: "Automated Email Outreach",
      description: "Crafts personalized email sequences, follows up with leads, and manages campaigns autonomously.",
      category: "Sales & Marketing",
    },
    {
      icon: <PenTool className="h-8 w-8 text-teal-400" />,
      title: "Content Generation Engine",
      description: "Generates blog posts, social media updates, and marketing copy tailored to your brand.",
      category: "Content & Operations",
    },
    {
      icon: <Filter className="h-8 w-8 text-teal-400" />,
      title: "Smart Lead Qualification",
      description: "Analyzes incoming leads, scores them based on custom criteria, and routes to sales reps.",
      category: "Sales & Marketing",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-teal-400" />,
      title: "Dynamic Chatbot Support",
      description: "Provides instant, intelligent customer support, resolving queries and escalating complex issues.",
      category: "Customer Service",
    },
    {
      icon: <Globe className="h-8 w-8 text-teal-400" />,
      title: "Web Data Scraper",
      description: "Collects targeted data from websites for market research, competitive analysis, and lead generation.",
      category: "Data & Research",
    },
    {
      icon: <Calendar className="h-8 w-8 text-teal-400" />,
      title: "Automated Scheduling Assistant",
      description: "Manages complex calendars, sends reminders, and schedules meetings for your team and clients.",
      category: "Operations",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-teal-400" />,
      title: "Revenue Forecasting AI",
      description: "Predicts future sales trends and identifies growth opportunities using historical data analysis.",
    },
    {
      icon: <Key className="h-8 w-8 text-teal-400" />,
      title: "Secure Onboarding Bot",
      description: "Automates new client/employee onboarding, collecting documents and setting up access.",
      category: "Operations",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-teal-400" />,
      title: "Invoice Processing Bot",
      description: "Automates invoice creation, sending, and tracking, integrating with your accounting software.",
      category: "Finance & Operations",
    },
    {
      icon: <Mic className="h-8 w-8 text-teal-400" />,
      title: "Voice AI Assistant",
      description: "Provides voice-activated support and automates call handling for enhanced customer interaction.",
      category: "Customer Service",
    },
    {
      icon: <GitBranch className="h-8 w-8 text-teal-400" />,
      title: "Workflow Optimization Bot",
      description: "Identifies bottlenecks in your processes and suggests AI-driven improvements for efficiency.",
      category: "Operations",
    },
  ];

  const mostPopularBots = [
    {
      icon: <Bot className="h-8 w-8 text-teal-400" />,
      title: "AI Receptionist",
      description: "Automate call handling, appointment booking, and FAQ responses 24/7.",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-teal-400" />,
      title: "Smart Website Chatbot",
      description: "Engage visitors, qualify leads, and provide instant support on your website.",
    },
    {
      icon: <Mail className="h-8 w-8 text-teal-400" />,
      title: "Personalized Email Agent",
      description: "Craft and send hyper-personalized email campaigns for sales and marketing.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-teal-400" />,
      title: "Sales Forecasting AI",
      description: "Predict future sales with high accuracy to optimize inventory and strategy.",
    },
    {
      icon: <Filter className="h-8 w-8 text-teal-400" />,
      title: "Automated Lead Scorer",
      description: "Instantly score and prioritize leads based on engagement and fit, boosting sales efficiency.",
    },
    {
      icon: <PenTool className="h-8 w-8 text-teal-400" />,
      title: "Automated Report Writer",
      description: "Generate comprehensive reports automatically, saving hours on data compilation.",
    },
  ];

  const categories = ["All", ...new Set(allServices.map(service => service.category)), "Most Popular Bots"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const displayedServices = selectedCategory === "All"
    ? allServices
    : selectedCategory === "Most Popular Bots"
      ? mostPopularBots
      : allServices.filter(service => service.category === selectedCategory);

  return (
    <section id="ai-agents-section" className="px-6 py-20 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">How SolSoftwares <span className="text-teal-400">Elevates Your Business</span></h2>
      <p className="text-center text-zinc-300 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
        From boosting sales to streamlining operations, our intelligent AI agents are custom-built to deliver significant, measurable impact across every facet of your organization.
      </p>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full text-lg font-medium transition-colors duration-300 hover:scale-105 transform
              ${selectedCategory === category
                ? 'bg-teal-500 text-zinc-950 shadow-md animate-pulse-once' // Added pulse-once for active filter
                : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white border border-zinc-700'
              }`}
          >
            {category}
          </button>
        ))}
        {/* Keyframe for pulse-once animation */}
        <style>{`
          @keyframes pulse-once {
            0% { transform: scale(1); }
            50% { transform: scale(1.02); }
            100% { transform: scale(1); }
          }
          .animate-pulse-once {
            animation: pulse-once 0.3s ease-out;
          }
        `}</style>
      </div>

      {selectedCategory === "Most Popular Bots" && (
        <p className="text-center text-zinc-400 text-md italic mb-8 fade-in-up" style={{animationDelay: '0.1s'}}>
          If you’re unsure what you need, here’s what most clients love.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedServices.map((service, index) => (
          <div
            key={service.title}
            className="bg-zinc-900 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 transform border border-zinc-700 hover:border-teal-500 flex flex-col items-center text-center group
            fade-in-up" // Apply fade-in animation
            style={{animationDelay: `${index * 0.1}s`}} // Stagger animation
          >
            <div className="mb-3 p-3 bg-zinc-800 rounded-full group-hover:scale-110 transition-transform duration-200">{service.icon}</div>
            <h4 className="text-xl font-semibold text-white mb-2 leading-tight">{service.title}</h4>
            <p className="text-zinc-300 text-base leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-zinc-400 text-lg mt-12 leading-relaxed">
        Don't see exactly what you need?{" "}
        <button
          onClick={() => scrollToSection("contact-section")}
          className="text-teal-400 font-semibold underline hover:text-teal-300 transition-colors"
        >
          Let's discuss a custom AI solution
        </button>{" "}
        tailored specifically for your business.
      </p>
    </section>
  );
};

// Apps Section (Seamlessly Integrate with Your Essential Tools)
const AppsSection = () => {
  const apps = [
    { name: "Dropbox", icon: DropboxLogo },
    { name: "PayPal", icon: PaypalLogo },
    { name: "WhatsApp", icon: WhatsAppLogo },
    { name: "GitHub", icon: GitHubLogo },
    { name: "HubSpot", icon: HubSpotLogo },
    { name: "LinkedIn", icon: LinkedInLogo },
    { name: "Instagram", icon: InstagramLogo },
    { name: "Notion", icon: NotionLogo },
    { name: "Telegram", icon: TelegramLogo },
    { name: "Google Sheets", icon: GoogleSheetsLogo },
    { name: "Trello", icon: TrelloLogo },
    { name: "Figma", icon: FigmaLogo },
  ];

  return (
    <section id="apps-section" className="py-20 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight">
          Seamlessly Integrate with <span className="text-teal-400">Your Essential Tools</span>
        </h2>
        <p className="text-zinc-300 text-lg md:text-xl mb-16 max-w-3xl mx-auto">
          Our AI automations seamlessly connect with over 400+ leading applications. From CRMs to communication platforms, we ensure smooth data flow and enhanced efficiency without disrupting your existing ecosystem.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 justify-items-center">
          {apps.map((app) => (
            <div
              key={app.name}
              className="flex flex-col items-center p-5 bg-zinc-800 rounded-full shadow-lg border border-zinc-700
                         hover:border-teal-500 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {/* app.icon renders the SVG component directly */}
              <app.icon className="h-16 w-16 mb-3" /> 
            </div>
          ))}
        </div>
        <p className="text-zinc-300 text-lg md:text-xl mt-16 max-w-3xl mx-auto">
          SolSoftwares seamlessly integrates with over 400+ platforms to automate your existing workflows, giving you a truly connected and powerful automation solution.
        </p>
      </div>
    </section>
  );
};


// How It Works Section (Conceptual, placeholder for now)
const HowItWorksSection = () => (
  <section id="how-it-works-section" className="px-6 py-20 max-w-6xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How It Works: Our Streamlined Process</h2>
    <p className="text-zinc-300 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
      We believe in a transparent and efficient process, from initial consultation to full deployment and ongoing support. Here's a glimpse into our journey together.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-zinc-900 p-8 rounded-2xl shadow-xl border border-zinc-700 fade-in-up group" style={{animationDelay: '0s'}}>
        <div className="text-teal-400 text-5xl font-extrabold mb-4 group-hover:scale-110 transition-transform duration-200">1.</div>
        <h3 className="text-2xl font-semibold text-white mb-3">Discovery & Strategy</h3>
        <p className="text-zinc-300">We start with a deep dive into your business, identifying pain points and opportunities for AI-driven transformation. We craft a bespoke strategy tailored to your goals.</p>
      </div>
      <div className="bg-zinc-900 p-8 rounded-2xl shadow-xl border border-zinc-700 fade-in-up group" style={{animationDelay: '0.2s'}}>
        <div className="text-teal-400 text-5xl font-extrabold mb-4 group-hover:scale-110 transition-transform duration-200">2.</div>
        <h3 className="text-2xl font-semibold text-white mb-3">Custom AI Development</h3>
        <p className="text-zinc-300">Our expert team designs and develops your custom AI agents, leveraging cutting-edge models and ensuring seamless integration with your existing tools.</p>
      </div>
      <div className="bg-zinc-900 p-8 rounded-2xl shadow-xl border border-zinc-700 fade-in-up group" style={{animationDelay: '0.4s'}}>
        <div className="text-teal-400 text-5xl font-extrabold mb-4 group-hover:scale-110 transition-transform duration-200">3.</div> {/* Re-added the "3." */}
        <h3 className="text-2xl font-semibold text-white mb-3">Deployment & Optimization</h3>
        <p className="text-zinc-300">We deploy your AI solutions and rigorously test them. Post-launch, we continuously monitor performance and optimize for maximum impact and ROI.</p>
      </div>
    </div>
  </section>
);


const SecurityAndTransparencySection = () => (
  <section id="security-transparency-section" className="px-6 py-20 max-w-6xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">
      Your Data, Our Priority: <span className="text-teal-400">Uncompromising Security</span>
    </h2>
    <p className="text-center text-zinc-300 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
      We build trust through robust security measures and absolute transparency. Your sensitive data is protected at every layer, ensuring peace of mind for your business.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Feature
        icon={<LockKeyhole className="h-8 w-8" />}
        title="Military-Grade Encryption"
        desc="All data, both in transit and at rest, is secured with AES-256 encryption and industry-leading TLS protocols, ensuring maximum confidentiality."
      />
      <Feature
        icon={<Network className="h-8 w-8" />}
        title="Minimal Access Principle"
        desc="Our AI agents operate with strictly scoped OAuth and API access, ensuring they only touch the data essential for their assigned tasks."
      />
      <Feature
        icon={<Activity className="h-8 w-8" />}
        title="Real-time Audit Trails"
        desc="Maintain full oversight with comprehensive activity logging. Every action performed by our AI agents is meticulously recorded for your review and compliance."
      />
      <Feature
        icon={<ShieldCheck className="h-8 w-8" />}
        title="Zero AI Model Data Retention"
        desc="Your proprietary data is never stored, reviewed, or used for AI model training outside your specific, defined workflows. Your data remains yours."
      />
      <Feature
        icon={<Trash className="h-8 w-8" />}
        title="User-Driven Data Control"
        desc="You retain complete control over your data's lifecycle. Easily manage retention policies, initiate deletions, or export your data on demand."
      />
      <Feature
        icon={<GitBranch className="h-8 w-8" />}
        title="Immutable Infrastructure"
        desc="Our systems leverage immutable infrastructure, preventing unauthorized changes and ensuring consistent, secure deployment environments."
      />
    </div>
  </section>
);

// Contact Section (Refined copy and styling)
const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(false); // Reset status
    setError(false);     // Reset error
    setIsSubmitting(true); // Indicate submission in progress

    const form = event.target;
    const data = new FormData(form);

    // Honeypot check
    if (data.get('honeypot-field')) { // If honeypot filled, likely a bot
      console.log('Honeypot triggered. Bot detected.');
      setIsSubmitting(false);
      setSubmitted(true); // Pretend success to bots
      form.reset();
      return;
    }

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        formRef.current.reset(); // Clear form fields
      } else {
        setError(true);
        console.error('Form submission failed:', response.statusText);
      }
    } catch (err) {
      setError(true);
      console.error('Network or fetch error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-section" className="px-6 py-20 max-w-3xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">Unlock Your Business Potential</h2>
      <p className="text-zinc-300 text-lg md:text-xl text-center mb-8 max-w-2xl mx-auto leading-relaxed">
        Ready to redefine efficiency and accelerate growth? Schedule a free, no-obligation strategy call with our AI experts today. Let's build your future.
      </p>
      {!submitted && !error && (
        <form
          ref={formRef}
          action="https://formspree.io/f/mblykqlp" // Formspree endpoint updated to your provided one
          method="POST"
          onSubmit={handleSubmit}
          className="bg-zinc-900 p-8 md:p-10 rounded-2xl shadow-2xl flex flex-col gap-6 border border-zinc-700"
        >
          {/* Honeypot field - visually hidden for humans */}
          <input type="text" name="honeypot-field" className="hidden" style={{ display: 'none' }} aria-hidden="true" tabIndex="-1" autoComplete="off" />

          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            className="bg-zinc-800 px-5 py-3 rounded-xl text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-200"
            required
            aria-label="Your Full Name"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Business Email Address"
            className="bg-zinc-800 px-5 py-3 rounded-xl text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-200"
            required
            aria-label="Your Business Email Address"
          />
          <input
            type="text"
            name="company"
            placeholder="Your Company Name (Optional)"
            className="bg-zinc-800 px-5 py-3 rounded-xl text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-200"
            aria-label="Your Company Name (Optional)"
          />
          <textarea
            name="message"
            placeholder="Tell us about your automation needs or specific challenges you're facing..."
            rows={6}
            className="bg-zinc-800 px-5 py-3 rounded-xl text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-200 resize-y"
            required
            aria-label="Your message about automation needs"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-teal-500 hover:bg-teal-400 text-zinc-950 font-extrabold px-8 py-4 rounded-full text-lg shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform
                       disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
          >
            {isSubmitting ? "Sending..." : "Send My Inquiry"}
          </button>
          <p className="text-zinc-400 text-sm text-center mt-2">
            We respect your privacy. All information is confidential and used only to understand your needs.
          </p>
        </form>
      )}

      {/* Success Modal */}
      {submitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 p-4">
          <div className="bg-teal-700 text-white p-8 rounded-2xl shadow-2xl text-center fade-in-up transform scale-105 animate-modal-pop">
            <CheckCircle className="h-16 w-16 text-white mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Thank You!</h3>
            <p className="text-xl leading-relaxed mb-6">Your message has been sent successfully. We'll be in touch shortly.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 bg-white text-teal-900 px-6 py-3 rounded-full font-semibold hover:bg-zinc-100 transition-colors"
            >
              Send Another Message
            </button>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {error && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 p-4">
          <div className="bg-red-700 text-white p-8 rounded-2xl shadow-2xl text-center fade-in-up transform scale-105 animate-modal-pop">
            <AlertTriangle className="h-16 w-16 text-white mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Submission Failed!</h3>
            <p className="text-xl leading-relaxed mb-6">
              Oops! Something went wrong. Please check your details or try again.
              If the issue persists, email us directly at solomon@solsoftwares.com.
            </p>
            <button
              onClick={() => setError(false)}
              className="mt-6 bg-white text-red-900 px-6 py-3 rounded-full font-semibold hover:bg-zinc-100 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      )}
      <style>{`
        @keyframes modal-pop {
          0% { opacity: 0; transform: scale(0.9) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-modal-pop {
          animation: modal-pop 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

// Footer (Enhanced with relevant links)
const Footer = () => (
  <footer id="footer" className="text-center text-zinc-400 text-sm py-8 border-t border-zinc-800 bg-zinc-950 px-6">
    <p className="mb-4">&copy; {new Date().getFullYear()} SolSoftwares. All rights reserved.</p>
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
      <a
        href="https://docs.google.com/document/d/1OiUjSmB2JpgERcXnCNR1kdh58-iAGtRxpJT8HuOg9B4/edit?usp=sharing" // Google Docs link for Privacy Policy
        download="Solsoftwares_Privacy_Policy.pdf"
        className="text-zinc-300 hover:text-white transition-colors flex items-center gap-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Download className="w-5 h-5" /> Privacy Policy
      </a>
      <a href="#footer" className="text-zinc-300 hover:text-white transition-colors" onClick={() => scrollToSection('footer')}>
        Terms of Service
      </a>
      <a href="#how-it-works-section" className="text-zinc-300 hover:text-white transition-colors" onClick={() => scrollToSection('how-it-works-section')}>
        How It Works
      </a>
      <a href="#ai-agents-section" className="text-zinc-300 hover:text-white transition-colors" onClick={() => scrollToSection('ai-agents-section')}>
        AI Solutions
      </a>
    </div>
  </footer>
);

// Main App Component
function App() {
  const sectionsRef = useRef([]);
  const [activeSectionId, setActiveSectionId] = useState('hero-section'); // Default to home
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const scrollPositionRef = useRef(0); // Ref to store scroll position

  const addToRefs = useCallback((el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  }, []);

  // Effect to manage body and html overflow when mobile menu is open
  useEffect(() => {
    const bodyElement = document.body;

    if (isMobileMenuOpen) {
      scrollPositionRef.current = window.scrollY; // Store current scroll position

      bodyElement.classList.add('no-scroll');
      bodyElement.style.top = `-${scrollPositionRef.current}px`; // Fix current scroll position
    } else {
      bodyElement.classList.remove('no-scroll');
      bodyElement.style.top = ''; // Remove fixed top
      window.scrollTo(0, scrollPositionRef.current); // Restore scroll position
    }

    // Cleanup function: important for when component unmounts or effect re-runs before state changes
    return () => {
      bodyElement.classList.remove('no-scroll');
      bodyElement.style.top = '';
      window.scrollTo(0, scrollPositionRef.current); // Ensure scroll position is restored on unmount too
    };
  }, [isMobileMenuOpen]);

  // Effect to close menu on Escape key press
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMobileMenuOpen]);

  // Intersection Observer for scroll animations and active link indication
  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: '-50% 0px -50% 0px', // When 50% of section is in viewport
      threshold: 0, // No specific threshold needed, just looking for intersection
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSectionId(entry.target.id);
          // Apply fade-in-up animation if it's not already visible
          if (entry.target.classList.contains('fade-in-up-init')) {
            entry.target.classList.remove('fade-in-up-init');
            entry.target.classList.add('fade-in-up');
          }
        }
      });
    }, observerOptions);

    // Initial pass to add animation class and observe
    sectionsRef.current.forEach(section => {
      if (section) {
        section.classList.add('fade-in-up-init'); // Add initial hidden state
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="bg-zinc-950 text-white font-['Poppins'] min-h-screen antialiased">
      {/* Global styles for Poppins font and scroll animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Helvetica+Neue:wght@400;500;600;700;800;900&display=swap'); /* For logo */

        /* Allow scrolling by default, but prevent horizontal overflow */
        html, body {
          overflow-x: hidden;
        }
        html {
          scroll-behavior: smooth;
        }

        /* New class for preventing body scroll */
        body.no-scroll {
          overflow: hidden;
          position: fixed;
          width: 100%;
        }

        .fade-in-up-init {
          opacity: 0;
          transform: translateY(20px);
        }

        .fade-in-up {
          animation: fadeInUp 0.7s ease-out forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Subtle bounce for hero CTA */
        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s infinite ease-in-out;
        }

        /* Subtle bounce for icons on hover */
        @keyframes bounce-icon {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .hover\\:animate-bounce-icon:hover {
          animation: bounce-icon 0.3s ease-out;
        }
      `}</style>

      {/* Navigation Bar */}
      <NavBar activeSectionId={activeSectionId} onMenuToggle={setIsMobileMenuOpen} />

      {/* Render Sections with refs for scroll animations */}
      {/* Each section now has a ref and will be initially hidden via fade-in-up-init */}
      <div ref={addToRefs}>
        <HeroSection />
      </div>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-700 to-transparent my-16 md:my-24"></div> {/* Section Divider */}
      <div ref={addToRefs}>
        <OurVisionSection />
      </div>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-700 to-transparent my-16 md:my-24"></div> {/* Section Divider */}
      <div ref={addToRefs}>
        <WhySolSoftwaresSlider slides={sliderContent} />
      </div>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-700 to-transparent my-16 md:my-24"></div> {/* Section Divider */}
      <div ref={addToRefs}>
        <HowItWorksSection />
      </div>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-700 to-transparent my-16 md:my-24"></div> {/* Section Divider */}
      <div ref={addToRefs}>
        <WhatIsN8nSection /> {/* NEW POSITION */}
      </div>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-700 to-transparent my-16 md:my-24"></div> {/* Section Divider */}
      <div ref={addToRefs}>
        <AIAgentsSection />
      </div>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-700 to-transparent my-16 md:my-24"></div> {/* Section Divider */}
      <div ref={addToRefs}>
        <AppsSection /> {/* REPLACED / MODIFIED AppsSection */}
      </div>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-700 to-transparent my-16 md:my-24"></div> {/* Section Divider */}
      <div ref={addToRefs}>
        <SecurityAndTransparencySection />
      </div>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-700 to-transparent my-16 md:my-24"></div> {/* Section Divider */}
      <div ref={addToRefs}>
        <ContactSection />
      </div>
      <div ref={addToRefs}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
