<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20.038 3.962a5.845 5.845 0 0 1 0 8.265l-7.858 7.859a5.845 5.845 0 0 1-8.266-8.266l7.859-7.858a5.845 5.845 0 0 1 8.265 0M13.162 5.35 8.944 9.568l5.487 5.487 4.218-4.216a3.88 3.88 0 1 0-5.487-5.487\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
