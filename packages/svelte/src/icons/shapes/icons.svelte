<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m14.25 3 7 7m-7 0 7-7m-18 3.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0M2.75 21h8l-4-7zm11.5-7h7v7h-7z\"/>";
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
