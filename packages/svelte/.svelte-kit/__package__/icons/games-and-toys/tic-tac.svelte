<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 12h18m-9-9v18m-8-5 4 4m-4 0 4-4m8-12 4 4m-4 0 4-4M4 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0m12 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/>";
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
