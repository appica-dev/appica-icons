<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6.825 19 6 22m5.5-20L7.537 16.412M22 12.5 2 18m11-9a2 2 0 1 0 4 0 2 2 0 0 0-4 0m-3 0a5 5 0 1 0 10 0 5 5 0 0 0-10 0\"/>";
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
