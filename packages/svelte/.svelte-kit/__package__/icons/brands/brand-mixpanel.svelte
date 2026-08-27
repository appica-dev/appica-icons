<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M2 12a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0m17 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0m-8 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/>";
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
