<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M18.6 11.998a6.7 6.7 0 0 0-.536-1.12l-4.89-7.26c-.42-.626-1.287-.804-1.936-.398a1.4 1.4 0 0 0-.41.397l-4.893 7.26C4.24 13.715 4.9 17.318 7.502 19.423a7.16 7.16 0 0 0 5.002 1.562M19 22v-6m0 0 3 3m-3-3-3 3\"/>";
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
