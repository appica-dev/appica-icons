<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10 10c-.5-1-2.5-1-3 0m10 0c-.5-1-2.5-1-3 0m.5 5a3.5 3.5 0 0 1-5 0m2.5 6a9 9 0 1 1 0-18 9 9 0 0 1 0 18\"/>";
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
