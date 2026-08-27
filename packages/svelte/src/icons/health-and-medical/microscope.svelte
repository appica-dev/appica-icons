<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5 21h14M6 18h2m-1 0v3m3.5-8.5L9 14m8-11 3 3m-8 15a6 6 0 0 0 3.715-10.712M9 11l3 3 6-6-3-3z\"/>";
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
