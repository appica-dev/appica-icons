<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 19V8.5a3.5 3.5 0 1 1 7 0V19m-7-6h7m11-1v7m-7-3.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0\"/>";
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
