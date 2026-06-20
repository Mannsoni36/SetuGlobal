---
enable: true
badge: "Contact"
title: "Start Your <br /> Germany Journey Today"
description: "Free consultation, no commitment. Drop us a message and we'll get back within one business day."
image: "/images/contact-home.jpg"
imageAlt: "Student preparing for their move to Germany"
characterImage: "/images/character-3d.png"
characterImageAlt: "3D character"

form:
  emailSubject: "New consultation request — Setu Global website"
  submitButton:
    enable: true
    label: "Send a Message"
  inputs:
    - label: "Full Name"
      placeholder: "Full Name *"
      name: "Full Name"
      required: true
      halfWidth: true
      defaultValue: ""
    - label: "Email Address"
      placeholder: "Email Address *"
      name: "Email Address"
      required: true
      type: "email"
      halfWidth: true
      defaultValue: ""
    - label: "Phone Number"
      placeholder: "Phone Number *"
      name: "Phone Number"
      required: true
      type: "text"
      halfWidth: true
      defaultValue: ""
    - label: "What do you need help with?"
      placeholder: "Select a topic *"
      name: "Subject"
      required: true
      halfWidth: true
      dropdown:
        type: "select"
        items:
          - label: "University & Course Selection"
            value: "University & Course Selection"
            selected: false
          - label: "Visa Guidance"
            value: "Visa Guidance"
            selected: false
          - label: "Scholarship & Blocked Account"
            value: "Scholarship & Blocked Account"
            selected: false
          - label: "Other"
            value: "Other"
            selected: false
    - label: "Message"
      tag: "textarea"
      placeholder: "Tell us about your goals (target course, intake, budget) *"
      name: "Message"
      required: true
      halfWidth: false
      rows: "4"
      defaultValue: ""
    - note: success
      parentClass: "hidden text-sm message success"
      content: "We have received your message! We'll get back to you within one business day."
    - note: deprecated
      parentClass: "hidden text-sm message error"
      content: "Something went wrong! Please try again or WhatsApp us at +91 8140881823."
---
