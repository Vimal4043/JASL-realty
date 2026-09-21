import { BRAND } from '../data/properties.js'

// FormSubmit (https://formsubmit.co) delivers the posted form data to the
// BRAND inbox (BRAND.email) without requiring a backend server. It's the same
// service already used by the home page enquiry form.
const ENDPOINT = `https://formsubmit.co/${BRAND.email}`

export async function sendForm(payload, subject) {
  const body = new URLSearchParams()
  body.set('_subject', subject)
  body.set('_captcha', 'false')
  body.set('_template', 'table')

  Object.entries(payload).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      body.set(key, String(value))
    }
  })

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    body: body.toString(),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
  })

  if (!response.ok) {
    throw new Error(`Form submission failed (${response.status})`)
  }

  return response
}