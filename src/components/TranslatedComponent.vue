<template>
  <div>
    The next sentence is translated: {{t('testme')}}
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n({
  messages: {
    en: {
      testme: 'This is a translated resource',
    },
  },
})
</script>