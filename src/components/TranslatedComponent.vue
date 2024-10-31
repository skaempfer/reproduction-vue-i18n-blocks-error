<template>
  <div>
    The next sentence is translated: {{t('testme')}}
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

// When working with translation messages provided like this, no error is thrown
// const { t } = useI18n({
//   messages: {
//     en: {
//       testme: 'This is a translated resource',
//   },
// }
//})
</script>
<i18n>
{
  en: {
    testme: 'This is a translated resource',
  },
}
</i18n>