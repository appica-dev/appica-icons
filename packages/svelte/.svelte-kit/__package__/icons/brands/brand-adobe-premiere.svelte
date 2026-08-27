<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7.263 15.79V12m0 0V8.752c0-.335.222-.541.542-.541h1.353a1.895 1.895 0 1 1 0 3.789zm6.632-1.421v1.895m0 0v3.315m0-3.315c.531-.709 1.026-1.592 1.894-1.832a1.8 1.8 0 0 1 .474-.063M3 12c0-4.243 0-6.364 1.318-7.682S7.758 3 12 3s6.364 0 7.682 1.318S21 7.758 21 12s0 6.364-1.318 7.682S16.242 21 12 21s-6.364 0-7.682-1.318S3 16.242 3 12\"/>";
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
