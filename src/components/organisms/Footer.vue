<template>
  <footer class="app-footer">
    <div v-if="status === 'success'" class="app-footer-success">
      <div class="col-70">{{ $t('correct') }} 🎉</div>
      <div class="col-30" @click="next()">{{ $t('next') }} <span class="icon-arrow">❯</span></div>
    </div>
    <div v-else-if="status === 'failure'" class="app-footer-failure">
      <div class="col-100">{{ $t('wrong') }} 😟</div>
    </div>
    <div v-else class="app-footer-default">
      <div class="col-70">
        <div class="app-footer-streak">
          <span class="icon-streak">🔥</span>
          <span lass="app-footer-streak-text" v-text="puzzleCount" />
        </div>
      </div>
      <div class="col-30" @click="test()">{{ $t('submit') }} <span class="icon-arrow">❯</span></div>
    </div>
  </footer>
</template>

<script lang="ts">
import { RuleInterface } from '../../../types'
import { testRules } from '../../services/PuzzleFactory'
import Vue from 'vue'

enum Status {
  Default = 'default',
  Failure = 'failure',
  Success = 'success'
}

export default Vue.extend({
  name: 'Footer',

  props: {
    attempt: {
      required: true,
      type: Array as () => Array<number>
    },

    correctAnswers: {
      required: true,
      type: Number
    },

    rules: {
      required: true,
      type: Array as () => Array<RuleInterface>
    }
  },

  data: () => ({
    status: Status.Default as string
  }),

  computed: {
    puzzleCount(): number {
      return this.correctAnswers + 1
    }
  },

  methods: {
    next() {
      this.$emit('nextGame')
      this.status = Status.Default
    },

    test() {
      const passTheTest = testRules(this.attempt, this.rules)

      if (passTheTest) {
        this.status = Status.Success
        this.$emit('correctAnswer')
      } else {
        this.status = Status.Failure
        setTimeout(() => {
          this.status = Status.Default
        }, 2000)
      }
    }
  }
})
</script>

<i18n>
{
  "en": {
    "correct": "Correct",
    "next": "Next",
    "submit": "Submit",
    "wrong": "Wrong"
  },
  "pt": {
    "correct": "Correto",
    "next": "Próximo",
    "submit": "Enviar",
    "wrong": "Errado"
  }
}
</i18n>

<style lang="scss" scoped>
.app-footer {
  display: flex;

  &-default,
  &-failure,
  &-success {
    color: #ffffff;
    display: flex;
    height: 40px;
    text-transform: uppercase;
    width: 100%;

    [class*='col-'] {
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 15px;
    }
  }

  &-default {
    .col-30 {
      background-color: #252525;
    }

    .col-70 {
      background-color: #383838;
    }
  }

  &-failure {
    background-color: #e17833;
  }

  &-streak {
    align-items: center;
    display: flex;
    justify-content: flex-start;
    width: 100%;

    &-text {
      font-size: 1.1em;
    }

    .icon-streak {
      font-size: 1.2em;
      margin-right: 0.25em;
    }
  }

  &-success {
    .col-30 {
      background-color: #4c8761;
    }

    .col-70 {
      background-color: #73c991;
    }
  }

  .col-30 {
    cursor: pointer;
    width: 30%;
  }

  .col-70 {
    width: 70%;
  }

  .col-100 {
    width: 100%;
  }

  .icon-arrow {
    font-size: 12px;
    margin-left: 5px;
  }
}
</style>
