<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5.38 15.866a14.94 14.94 0 0 0 6.815 1.634 14.94 14.94 0 0 0 6.502-1.479M13 11.01V11m-2 3v-.01m1 7.51c-3.04 0-5.952-.714-8.5-1.983L12 3l8.5 16.517A19.1 19.1 0 0 1 12 21.5\"/>";
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
