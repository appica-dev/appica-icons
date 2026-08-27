<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6 4a4 4 0 0 1 4 3.8v10.7a1.5 1.5 0 0 1-3 0V12H6a4 4 0 0 1-4-3.8V8a4 4 0 0 1 4-4m12 0a4 4 0 0 0-4 3.8v10.7a1.5 1.5 0 1 0 3 0V12h1a4 4 0 0 0 4-3.8V8a4 4 0 0 0-4-4\"/>";
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
