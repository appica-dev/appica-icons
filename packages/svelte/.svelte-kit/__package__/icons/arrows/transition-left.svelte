<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6 21a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m9 9H7m0 0 3-3m-3 3 3 3m11-9v12a3 3 0 0 1-6 0V6a3 3 0 0 1 6 0\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
