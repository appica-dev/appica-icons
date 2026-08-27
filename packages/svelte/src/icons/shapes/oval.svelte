<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6 12c0 2.387.632 4.676 1.757 6.364S10.41 21 12 21s3.117-.948 4.243-2.636C17.368 16.676 18 14.387 18 12s-.632-4.676-1.757-6.364S13.59 3 12 3s-3.117.948-4.243 2.636C6.632 7.324 6 9.613 6 12\"/>";
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
