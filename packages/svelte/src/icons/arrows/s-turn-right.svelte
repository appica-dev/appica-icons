<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 0h9.5a3.5 3.5 0 1 1 0 7h-9a3.5 3.5 0 1 0 0 7H21m0 0-3-3m3 3-3 3\"/>";
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
