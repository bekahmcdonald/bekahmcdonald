<template lang="pug">
  main 
    section
      h1.title Clean SVG IDs
      p.intro Prevent ID conflicts by replacing IDs with a random string.
      
      .input-wrapper
        textarea.input(v-model="input" @click="setSubmitted(false)" spellcheck="false" autofocus rows="10" placeholder="Paste your svg code here")
      .fields
        .options
          label.option 
            input(type="checkbox" v-model="options['removeIds']")
            span Replace IDs
          label.option 
            input(type="checkbox" v-model="options['removeDataAttributes']")
            span Remove data attributes
          label.option
            input(type="checkbox" v-model="options['addIdPrefix']")
            span Add prefix to IDs
            .prefix(v-if="options['addIdPrefix']")
              input(type="text" v-model="options['idPrefix']" placeholder="Prefix" maxlength="8" :disabled="!options['addIdPrefix']")
        
        .buttons
          button.secondary-button(v-if="submitted" @click="clear") Clear
          button.primary-button(type="button" @click="submit") {{ submitButtonText }}
      
      .output-wrapper
        textarea.output(spellcheck="false") {{ output }}
        button.primary-button.copy(type="button" @click="copy") 
          span Copy
          .confirmation(v-show="copied") Copied!

    footer
      p &copy; {{ new Date().getFullYear() }} Bekah McDonald
      
</template>

<script>
import Axios from 'axios'
import { gsap } from 'gsap'

const ID_REGEX = /(\sid=['"])(.*?)(['"])/g // the id attribute, eg. id="path1"
const ID_REF_REGEX = /url\(#(.*?)\)/g // a reference to an id, eg. url(#path1)

export default {
  layout: 'tools',
  async asyncData({ params }) {
    const { data } = await Axios.get(
      `https://cms.bekahmcdonald.com/wp-json/bm/v1/global`
    )
    return data
  },
  data() {
    return {
      submitted: false,
      input: '',
      output: '',
      options: {
        removeIds: true,
        removeDataAttributes: true,
        addIdPrefix: false,
      },
      copied: false,
    }
  },
  computed: {
    submitButtonText() {
      if (this.submitted) return 'Resubmit'
      return 'Submit'
    },
  },
  watch: {
    submitted() {
      if (this.submitted) {
        this.showResult()
      } else {
        this.hideResult()
      }
    },
  },
  methods: {
    setSubmitted(value) {
      this.submitted = value
    },
    clear() {
      this.input = ''
      this.submitted = false
    },
    async copy() {
      await navigator.clipboard.writeText(this.output)
      this.copied = true
      setTimeout(() => {
        this.copied = false
      }, 1000)
    },
    showResult() {
      gsap.to('.output-wrapper', { autoAlpha: 1, duration: 0.5 })
      gsap.to('.output-wrapper', { height: 'auto', duration: 0.5 })
      gsap.to('.input', {
        minHeight: 0,
        height: '80',
        opacity: 0.5,
        duration: 0.5,
      })
    },
    hideResult() {
      gsap.to('.output-wrapper', { autoAlpha: 0, duration: 0.5 })
      gsap.to('.output-wrapper', { height: 0, duration: 0.5 })
      gsap.to('.input', {
        minHeight: '30vh',
        height: 'auto',
        opacity: 1,
        duration: 0.5,
      })
    },
    removeDataAttributes(input) {
      return this.input.replaceAll(/\sdata-\S+="(?:\\.|[^"\\])*"/g, '')
    },
    async submit() {
      this.submitted = true
      let result = this.input

      if (this.options.removeDataAttributes) {
        result = this.removeDataAttributes(result)
      }
      if (this.options.removeIds) {
        result = await this.replaceIds(result)
      }
      this.output = result
    },
    async replaceIds(input) {
      const allIds = [...input.matchAll(ID_REGEX)].map((item) => item[2])
    

      const allIdReferences = input.matchAll(ID_REF_REGEX)
      const uniqueIds = {}

      ;[...allIdReferences].forEach(([ref, id]) => {
        return (uniqueIds[id] = ref)
      })


      const randomIds = await this.fetchRandomIds(allIds.length)

      if (this.options.addIdPrefix) {
        randomIds.forEach((id, index) => {
          randomIds[index] = this.options.idPrefix + id
        })
      }

      let result = input

      allIds.forEach((id, index) => {
        const re = new RegExp(`(\\sid=['"])(${id})(['"])`, 'g')
        if (Object.keys(uniqueIds).includes(id)) {
          result = result.replaceAll(uniqueIds[id], `url(#${randomIds[index]})`)
          result = result.replaceAll(re, '$1' + randomIds[index] + '$3')
        } else {
          result = result.replaceAll(re, '')
        }
      })

      return result
    },
    fetchRandomIds(quantity) {
      const body = {
        jsonrpc: '2.0',
        method: 'generateStrings',
        params: {
          apiKey: this.api_keys['random.org'],
          n: quantity,
          length: 8,
          characters: 'abcdefghijklmnopqrstuvwxyz',
          replacement: true,
          pregeneratedRandomization: null,
        },
        id: 7285,
      }
      return fetch('https://api.random.org/json-rpc/4/invoke', {
        method: 'POST',
        cors: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .then((data) => {
          return data?.result?.random?.data
        })
    },
  },
  head: {
    meta: [
      {
        name: 'robots',
        content: 'noindex',
      },
    ],
  },
}
</script>

<style lang="scss" scoped>
$royal: #81559b;
$white: #ffffff;
$majestic: #7e3f8f;

main {
  accent-color: $white;
  background-color: $royal;
  color: $white;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 30px 10px 0;

  @include mq($from: md) {
    padding: 50px 50px 0;
  }
}

section {
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
}

footer {
  color: $white;
  font-size: 13px;
  margin-top: auto;
  padding: 2rem 0;
  text-align: center;
}

textarea {
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  border: solid 2px $white;
  color: $white;
  font-size: 15px;
  line-height: 1.5;
  max-width: 100%;
  min-height: 20vh;
  min-width: 100%;
  padding: 16px;
  width: 100%;

  @include mq($from: sm) {
    padding: 30px;
  }
}

.options {
  padding: 20px 0;
}

.option {
  align-items: center;
  display: flex;
  font-size: 16px;
  gap: 4px;

  input[type='checkbox'] {
    height: 24px;
    width: 24px;
  }
}

.buttons {
  display: flex;
  gap: 10px;
  button {
    flex: 1;

    @include mq($from: sm) {
      flex: auto;
    }
  }
}

button {
  border-radius: 4px;
  border: 0;
  border: solid 2px $white;
  cursor: pointer;
  display: inline-flex;
  font-size: 20px;
  font-weight: bold;
  justify-content: center;
  letter-spacing: 0.005em;
  margin: 20px 0;
  padding: 15px 20px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  width: 130px;
}

.primary-button {
  background-color: $white;
  color: $royal;

  &:hover {
    background-color: $majestic;
    color: $white;
  }
}

.secondary-button {
  background: transparent;
  color: $white;

  &:hover {
    background-color: $white;
    color: $royal;
  }
}

.fields,
.input-wrapper,
.output-wrapper {
  padding: 5px;
}

.output-wrapper {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  height: 0;
  visibility: hidden;
  overflow: hidden;
}

.fields {
  width: 100%;
  @include mq($from: sm) {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
}

.title {
  font-size: clamped(3rem, 5rem, breakpoint(xs), breakpoint(md));
  font-weight: 700;
  margin-bottom: 12px;
  text-align: center;

  @include mq($from: sm) {
    margin-bottom: 20px;
  }
}

.intro {
  font-size: clamped(1.6rem, 2rem, breakpoint(xs), breakpoint(sm));
  font-weight: 450;
  margin-bottom: clamped(2rem, 5rem, breakpoint(xs), breakpoint(sm));
  text-align: center;
}

.copy {
  position: relative;
}

.confirmation {
  background: $white;
  border-radius: 4px;
  color: $royal;
  font-size: 15px;
  font-weight: 500px;
  padding: 10px;
  position: absolute;
  right: 105%;
}

.prefix {
  margin-left: 0.5rem;

  input {
    accent-color: $london;
    border-radius: 2px;
    border: 0;
    box-shadow: none;
    color: $ink;
    font-family: inherit;
    font-weight: 500;
    font: inherit;
    height: 3rem;
    outline-color:$powder;
    padding-inline: 0.75rem;
    width: 8em;
  }
}
</style>
