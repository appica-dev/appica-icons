<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m12.947 15.79-.82-2.653m0 0-.686-2.218c-.559-1.806-.838-2.708-1.336-2.708-.497 0-.777.902-1.335 2.708l-.687 2.218m4.044 0H8.083m-.82 2.652.82-2.652m7.706 2.652v-4.736m0-2.369v-.473M3 12c0-4.243 0-6.364 1.318-7.682S7.758 3 12 3s6.364 0 7.682 1.318S21 7.758 21 12s0 6.364-1.318 7.682S16.242 21 12 21s-6.364 0-7.682-1.318S3 16.242 3 12\"/>";
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
