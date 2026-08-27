<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5 12h14M4 15h16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4m8-11c3.783 0 6.953 2.133 7.786 5H4.214C5.047 6.133 8.217 4 12 4\"/>";
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
