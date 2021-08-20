<template>
  <footer class="app-footer">
    <div v-if="status === 'success'" class="app-footer-success">
      <div class="app-footer-success-message">{{ $t('correct') }} 🎉</div>
      <div class="app-footer-success-action" @click="next()">{{ $t('next') }} <span class="icon-arrow">❯</span></div>
    </div>
    <div v-else-if="status === 'failure'" class="app-footer-failure">
      <div>{{ $t('wrong') }} 😟</div>
    </div>
    <div v-else class="app-footer-default">
      <div class="app-footer-default-streak">
        <span class="icon-streak">🔥</span>
        <span lass="app-footer-default-streak-text" v-text="puzzleCount" />
      </div>
      <div class="app-footer-default-action" @click="test()">{{ $t('submit') }} <span class="icon-arrow">❯</span></div>
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
  &-default,
  &-failure,
  &-success {
    color: #ffffff;
    display: grid;
    text-transform: uppercase;

    > * {
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 15px;
    }
  }

  &-default {
    grid-template-columns: 70% 30%;

    &-action {
      background-color: #252525;
    }

    &-streak {
      align-items: center;
      background-color: #383838;
      display: flex;
      justify-content: flex-start;

      &-text {
        font-size: 1.1em;
      }

      .icon-streak {
        font-size: 1.2em;
        margin-right: 0.25em;
      }
    }
  }

  &-failure {
    background-color: #e17833;
  }

  &-success {
    grid-template-columns: 70% 30%;

    &-action {
      background-color: #4c8761;
      cursor: pointer;
    }

    &-message {
      background-color: #73c991;
    }
  }

  .icon-arrow {
    font-size: 12px;
    margin-left: 5px;
  }
}
</style>
