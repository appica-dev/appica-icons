<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 12c0 1.657 4.03 3 9 3 1.116 0 2.185-.068 3.172-.192m5.724-2.35A1.1 1.1 0 0 0 21 12m-.016.546a9 9 0 1 0-8.442 8.438M16 19h6m-3-3v6\"/>";
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
