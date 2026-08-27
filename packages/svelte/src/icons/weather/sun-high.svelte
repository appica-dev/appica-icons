<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m6.343 17.657-1.414 1.414M6.343 6.343 4.929 4.929m12.728 1.414 1.414-1.414m-1.414 12.728 1.414 1.414M4 12H2m10-8V2m8 10h2m-10 8v2m2.828-7.172A4 4 0 1 0 9.27 9.073a4 4 0 0 0 5.558 5.755\"/>";
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
