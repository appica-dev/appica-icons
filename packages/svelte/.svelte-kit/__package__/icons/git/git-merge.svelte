<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 0V8m0 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 0a4 4 0 0 0 4 4h4m0 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/>";
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
