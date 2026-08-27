<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M16.875 3.556A9.75 9.75 0 1 1 2.25 12l.005-.316a9.75 9.75 0 0 1 14.62-8.128M12 6.15c-2.228 0-3.817 2.553-3.897 5.608L8.1 12c0 3.16 1.614 5.85 3.9 5.85s3.9-2.69 3.9-5.85c0-3.161-1.614-5.85-3.9-5.85\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
