<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 9h4m5 7a4 4 0 1 0 0-8 4 4 0 0 0-1 .124M13 3v1m8 8h1m-9 8v1m6.4-15.4-.7.7m0 11.4.7.7M4 13.5a4 4 0 1 0 4 0V5a2 2 0 1 0-4 0z\"/>";
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
