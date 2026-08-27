<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M13.5 7 16 18l-4 4-4-4 2.5-11m3 0 .993-2.649A1 1 0 0 0 13.557 3h-3.114a1 1 0 0 0-.936 1.351L10.5 7m3 0h-3m3 0 5 5.5\"/>";
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
