<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15.044 19.736c-.943.55-1.966.976-3.044 1.255a12.03 12.03 0 0 1-7.438-5.697 11.98 11.98 0 0 1-1.074-9.296C6.608 6.141 9.66 5.065 12 3a12.03 12.03 0 0 0 8.512 2.998c.576 1.955.643 4.024.196 6.012m-1.698 3.983v2.999m0 2.998V22\"/>";
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
