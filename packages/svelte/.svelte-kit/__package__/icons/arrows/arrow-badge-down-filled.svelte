<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M16.193 6.462 12 9.814 7.807 6.46a.958.958 0 0 0-1.557.75v5.75a.96.96 0 0 0 .36.747L11.4 17.54a.96.96 0 0 0 1.198 0l4.792-3.833a.96.96 0 0 0 .359-.748V7.21a.958.958 0 0 0-1.557-.747\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
