<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6.5 5c7.72 2.266 10.037 7.597 12.5 12.5M17.5 5C9.78 7.266 7.463 12.597 5 17.5M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12\"/>";
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
