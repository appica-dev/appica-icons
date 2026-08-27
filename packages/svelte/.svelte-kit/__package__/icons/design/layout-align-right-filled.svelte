<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M19.778 3.25a.97.97 0 0 1 .972.972v15.556a.972.972 0 1 1-1.944 0V4.222a.97.97 0 0 1 .972-.972M13.944 8.111a2.916 2.916 0 0 1 2.917 2.917v1.944a2.917 2.917 0 0 1-2.917 2.917H6.167a2.917 2.917 0 0 1-2.917-2.917v-1.944A2.917 2.917 0 0 1 6.167 8.11z\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
